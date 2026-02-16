/* ─────────────────────────────────────────────
   INTERNAL CONSTANTS
   ───────────────────────────────────────────── */

const STAT_KEY_MAP = {
    hp: "HP",
    atk: "Attack",
    def: "Defense",
    spatk: "Special Attack",
    spdef: "Special Defense",
    spd: "Speed"
};

/* ─────────────────────────────────────────────
   BASE STAT CALCULATION (WITH NATURE)
   ───────────────────────────────────────────── */

function calcBaseStats(stats, speciesData, nature, baseStatModifier) {
    const newStats = foundry.utils.duplicate(stats);

    for (const [key, value] of Object.entries(newStats)) {
        const statName = STAT_KEY_MAP[key];

        // Determine base stat source safely
        let base =
            speciesData?.["Base Stats"]?.[statName] ??
            value.base ??
            value.value ??
            1;

        // Apply Nature (original behavior)
        if (nature && CONFIG.PTU.data.natureData[nature]) {
            const [up, down] = CONFIG.PTU.data.natureData[nature];

            if (up === statName) {
                base += statName === "HP" ? 1 : 2;
            }
            if (down === statName) {
                base -= statName === "HP" ? 1 : 2;
            }

            base = Math.max(base, 1);
        }

        value.base = base;
        value.value = Math.max(1, base + (baseStatModifier?.[key]?.total ?? 0));
    }

    return newStats;
}

/* ─────────────────────────────────────────────
   STAT TOTAL CALCULATION (CANONICAL)
   ───────────────────────────────────────────── */

function calculateStatTotal({
    level,
    actorStats,
    speciesData,
    nature,
    baseStatModifier,
    twistedPower,
    ignoreStages = false
}) {
    // Always ensure base stats (and Nature) are applied
    const stats = calcBaseStats(
        actorStats,
        speciesData,
        nature,
        baseStatModifier
    );

    let levelUpPointsSpend = 0;

    // Base totals: Base Stat + Level‑Up Points
    for (const value of Object.values(stats)) {
        value.total = value.value + value.levelUp;
        levelUpPointsSpend += value.levelUp;
    }

    // Twisted Power (original behavior)
    if (twistedPower) {
        const atkTotal = stats.atk.total;
        const spatkTotal = stats.spatk.total;

        stats.atk.total += Math.floor(spatkTotal / 2);
        stats.spatk.total += Math.floor(atkTotal / 2);
    }

    // Mods + Stages
    for (const [key, value] of Object.entries(stats)) {
        const sub = value.total + value.mod.value + value.mod.mod;

        if (ignoreStages) {
            value.total = Math.max(1, sub);
            continue;
       }

        const stage = (value.stage?.value ?? 0) + (value.stage?.mod ?? 0);

        if (stage > 0) {
            value.total = Math.max(1, Math.floor(sub * stage * 0.2 + sub));
        } else {
            if (key === "hp") {
                value.total = Math.max(1, sub);
            } else {
                value.total = Math.max(1, Math.ceil(sub * stage * 0.1 + sub));
            }
        }

            value.total = Math.max(1, value.total);
        }

    return {
        pointsSpend: levelUpPointsSpend,
        stats
    };
}

/* ─────────────────────────────────────────────
   EVASION CALCULATION
   ───────────────────────────────────────────── */

function calculateEvasions(data, ptuFlags, actorItems) {
    const abilities = {};

    for (const ability of actorItems.filter(i => i.type === "ability")) {
        if (ability.name.toLowerCase().includes("tangled feet")) {
            abilities.tangledFeet = true;
        }
    }

    if (ptuFlags?.is_vulnerable) {
        return {
            physical: 0,
            special: 0,
            speed: 0
        };
    }

    const evasionLimit =
        game.settings.get("ptu", "automation.maxEvasion") ?? 20;

    const tangledBonus =
        abilities.tangledFeet && ptuFlags?.is_confused ? 3 : 0;

    const evasion = {
        physical: Math.clamp(
            Math.min(Math.floor(data.stats.def.total / 5), 6) +
                data.modifiers.evasion.physical.total +
                tangledBonus,
            0,
            evasionLimit
        ),
        special: Math.clamp(
            Math.min(Math.floor(data.stats.spdef.total / 5), 6) +
                data.modifiers.evasion.special.total +
                tangledBonus,
            0,
            evasionLimit
        ),
        speed: Math.clamp(
            Math.min(Math.floor(data.stats.spd.total / 5), 6) +
                data.modifiers.evasion.speed.total +
                tangledBonus,
            0,
            evasionLimit
        )
    };

    if (ptuFlags?.is_stuck) evasion.speed = 0;

    return evasion;
}

/* ─────────────────────────────────────────────
   EXPORTS
   ───────────────────────────────────────────── */

export {
    calcBaseStats,
    calculateStatTotal,
    calculateEvasions
};
