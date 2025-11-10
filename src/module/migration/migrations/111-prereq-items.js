import { sluggify } from "../../../util/misc.js";
import { MigrationBase } from "../base.js";

export class Migration111PrereqItems extends MigrationBase {
    static version = 0.111;

    allowedTypes = ["feat", "edge", "enhancement"]

    async #getPackMap(type) {
        const packData = await (async () => {
            switch (type) {
                case "feat": return this.feats ??= await game.packs.get("ptu.feats").getDocuments();
                case "edge": return this.edges ??= await game.packs.get("ptu.edges").getDocuments();
                case "enhancement": return this.enhancements ??= await game.packs.get("ptu.enhancements").getDocuments();
            }
        })();
        switch(type) {
            case "feat": return this.featsMap ??= new Map(packData.map(feat => [feat.slug, feat]));
            case "edge": return this.edgesMap ??= new Map(packData.map(edge => [edge.slug, edge]));
            case "enhancement": return this.enhancementsMap ??= new Map(packData.map(enhancement => [enhancement.slug, enhancement]));
        }
    }

    /**
     * @type {MigrationBase['updateItem']} 
     */
    async updateItem(item) {
        if (!this.allowedTypes.includes(item.type)) return;

        const packMap = await this.#getPackMap(item.type);
        const compendiumItem = packMap.get?.(item.slug || sluggify(item.name)) ?? await (async () => {
            if(!item.flags?.core?.sourceId) return null;
            return await fromUuid(item.flags.core.sourceId);
        })();
        if (!compendiumItem) return;

        item.system.prerequisites = compendiumItem.system.prerequisites ?? [];
    }
}