import { PokemonGenerator } from "../../actor/pokemon/generator.js";
import { PTUSpecies } from "../../item/index.js";

/**
 * Generate a level using normal distribution with bounds
 * @param {number} centerLevel - Center level (mean)
 * @param {number} minLevel - Minimum level (hard bound)
 * @param {number} maxLevel - Maximum level (hard bound)
 * @returns {number} Generated level clamped to [minLevel, maxLevel]
 */
function generateLevelFromNormalDistribution(centerLevel, minLevel, maxLevel) {
    const variance = Math.max(1, (maxLevel - minLevel) / 12);
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    const level = centerLevel + z * variance;
    return Math.clamp(Math.round(level), minLevel, maxLevel);
}

export class PTUSpeciesDragOptionsPrompt extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["ptu", "pokemon", "drag-in"],
            template: "systems/ptu/static/templates/apps/species-drag-prompt.hbs",
            width: 250,
            height: "auto",
            title: "Species Drag-In"
        });
    }

    constructor(species, options) {
        if(!(species instanceof PTUSpecies)) throw new Error("Species must be a valid PTUSPecies instance");
        super(species, options);
        
        this.species = species;
        this.x = options.x;
        this.y = options.y;
        this.skip = options.skip ?? false;
    }

    /** @override */
    getData() {
        const data = super.getData();

        const shinyChanceDefault = Number(game.settings.get("ptu", "generation.defaultDexDragInShinyChance"));
        const statRandomnessDefault = Number(game.settings.get("ptu", "generation.defaultDexDragInStatRandomness"));

        return {
            ...data,
            levelDefault: 10,
            levelMinBound: game.settings.get("ptu", "generation.defaultDexDragInLevelMin"),
            levelMaxBound: game.settings.get("ptu", "generation.defaultDexDragInLevelMax"),
            shinyChanceDefault: shinyChanceDefault,
            statRandomnessDefault: statRandomnessDefault,
            preventDefault: game.settings.get("ptu", "generation.defaultDexDragInPreventEvolution"),
            species: this.species.name
        }
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        if(this.skip) {
            return this.submit();
        }
    }

    /** @override */
    async _updateObject(event, formData) {
        event.preventDefault();

        const centerLevel = Number(formData["level"]);
        const minLevel = game.settings.get("ptu", "generation.defaultDexDragInLevelMin");
        const maxLevel = game.settings.get("ptu", "generation.defaultDexDragInLevelMax");
        const generatedLevel = generateLevelFromNormalDistribution(centerLevel, minLevel, maxLevel);

        const generator = new PokemonGenerator(this.species, { x: this.x, y: this.y })
        await generator.prepare({
            minLevel: generatedLevel,
            maxLevel: generatedLevel,
            shinyChance: formData["shiny-chance"] / 100,
            statRandomness: formData["stat-randomness"] / 100,
            preventEvolution: formData["prevent-evolution"],
            saveDefault: false
        })
        await generator.create();
    }
}