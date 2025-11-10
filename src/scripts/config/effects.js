export const statusEffects = [
    {
        "id": "fainted",
        "name": "PTU.ConditionFainted",
        "img": "systems/ptu/static/images/conditions/Fainted.svg",
        "changes": [
            {
                "key": "flags.ptu.is_fainted",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "burned",
        "name": "PTU.ConditionBurned",
        "img": "systems/ptu/static/images/conditions/Burned.svg",
        "changes": [
            {
                "key": "flags.ptu.is_burned",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "system.stats.def.stage.mod",
                "value": -2,
                "mode": 2,
                "priority": 10
            }
        ]
    },
    {
        "id": "frozen",
        "name": "PTU.ConditionFrozen",
        "img": "systems/ptu/static/images/conditions/Frozen.svg",
        "changes": [
            {
                "key": "flags.ptu.is_frozen",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "paralyzed",
        "name": "PTU.ConditionParalyzed",
        "img": "systems/ptu/static/images/conditions/Paralyzed.svg",
        "changes": [
            {
                "key": "flags.ptu.is_paralyzed",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "poisoned",
        "name": "PTU.ConditionPoisoned",
        "img": "systems/ptu/static/images/conditions/Poisoned.svg",
        "changes": [
            {
                "key": "flags.ptu.is_poisoned",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "toxified",
        "name": "PTU.ConditionToxified",
        "img": "systems/ptu/static/images/conditions/Toxified.svg",
        "changes": [
            {
                "key": "flags.ptu.is_poisoned",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_toxified",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "confused",
        "name": "PTU.ConditionConfused",
        "img": "systems/ptu/static/images/conditions/Confused.svg",
        "changes": [
            {
                "key": "flags.ptu.is_confused",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "cursed",
        "name": "PTU.ConditionCursed",
        "img": "systems/ptu/static/images/conditions/Cursed.svg",
        "changes": [
            {
                "key": "flags.ptu.is_cursed",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "disabled",
        "name": "PTU.ConditionDisabled",
        "img": "systems/ptu/static/images/conditions/Disabled.svg",
        "changes": [
            {
                "key": "flags.ptu.is_disabled",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "flinched",
        "name": "PTU.ConditionFlinched",
        "img": "systems/ptu/static/images/conditions/Flinched.svg",
        "changes": [
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_flinched",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "infatuated",
        "name": "PTU.ConditionInfatuated",
        "img": "systems/ptu/static/images/conditions/Infatuated.svg",
        "changes": [
            {
                "key": "flags.ptu.is_infatuated",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "enraged",
        "name": "PTU.ConditionEnraged",
        "img": "systems/ptu/static/images/conditions/Enraged.svg",
        "changes": [
            {
                "key": "flags.ptu.is_enraged",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "asleep",
        "name": "PTU.ConditionAsleep",
        "img": "systems/ptu/static/images/conditions/Asleep.svg",
        "changes": [
            {
                "key": "flags.ptu.is_asleep",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "haunted",
        "name": "PTU.ConditionHaunted",
        "img": "systems/ptu/static/images/conditions/Haunted.svg",
        "changes": [
            {
                "key": "flags.ptu.is_haunted",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "suppressed",
        "name": "PTU.ConditionSuppressed",
        "img": "systems/ptu/static/images/conditions/Suppressed.svg",
        "changes": [
            {
                "key": "flags.ptu.is_suppressed",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "dimmed",
        "name": "PTU.ConditionDimmed",
        "img": "systems/ptu/static/images/conditions/Dimmed.svg",
        "changes": [
            {
                "key": "flags.ptu.is_dimmed",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "system.modifiers.acBonus.mod",
                "value": -6,
                "mode": 2,
                "priority": 30
            }
        ]
    },
    {
        "id": "blinded",
        "name": "PTU.ConditionBlinded",
        "img": "systems/ptu/static/images/conditions/Blinded.svg",
        "changes": [
            {
                "key": "flags.ptu.is_dimmed",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_blinded",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "system.modifiers.acBonus.mod",
                "value": -10,
                "mode": 2,
                "priority": 30
            }
        ]
    },
    {
        "id": "slowed",
        "name": "PTU.ConditionSlowed",
        "img": "systems/ptu/static/images/conditions/Slowed.svg",
        "changes": [
            {
                "key": "flags.ptu.is_slowed",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "immobilized",
        "name": "PTU.ConditionImmobilized",
        "img": "systems/ptu/static/images/conditions/Immobilized.svg",
        "changes": [
            {
                "key": "flags.ptu.is_immobilized",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "trapped",
        "name": "PTU.ConditionTrapped",
        "img": "systems/ptu/static/images/conditions/Trapped.svg",
        "changes": [
            {
                "key": "flags.ptu.is_trapped",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "proned",
        "name": "PTU.ConditionProned",
        "img": "systems/ptu/static/images/conditions/Proned.svg",
        "changes": [
            {
                "key": "flags.ptu.is_proned",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "vulnerable",
        "name": "PTU.ConditionVulnerable",
        "img": "systems/ptu/static/images/conditions/Vulnerable.svg",
        "changes": [
            {
                "key": "flags.ptu.is_vulnerable",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "tagged",
        "name": "PTU.ConditionTagged",
        "img": "systems/ptu/static/images/conditions/Tagged.svg",
        "changes": [
            {
                "key": "flags.ptu.is_tagged",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "cheered",
        "name": "PTU.ConditionCheered",
        "img": "systems/ptu/static/images/conditions/Cheered.svg",
        "changes": [
            {
                "key": "flags.ptu.is_cheered",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "vortex",
        "name": "PTU.ConditionVortex",
        "img": "systems/ptu/static/images/conditions/Vortex.svg",
        "changes": [
            {
                "key": "flags.ptu.is_stuck_in_vortex",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_slowed",
                "value": true,
                "mode": 5,
                "priority": 50
            },
            {
                "key": "flags.ptu.is_trapped",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    },
    {
        "id": "seeded",
        "name": "PTU.ConditionSeeded",
        "img": "systems/ptu/static/images/conditions/Seeded.svg",
        "changes": [
            {
                "key": "flags.ptu.is_seeded",
                "value": true,
                "mode": 5,
                "priority": 50
            }
        ]
    }
];

//Need to add: silenced, dead, distracted (should be within the system already, just not as a status effect), grappled (again, exists but not as a status), injured and heavily injured (see the last 2), incapacitated (sort of covered by some status conditions, but should be formalized), unconsious (same as previous), suffocating (the suffocation mechanic exists, just want it as a status)
//Need to modify: Disabled (its functionality is slightly different in Carbon vs PTU)