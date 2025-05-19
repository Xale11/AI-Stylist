export interface Outfit {
    oufit: OutfitItem[]
}

export interface OutfitItem {
    itemId: string
    name: string
    color: string
    reasoning: string
    description: string
    type: string
    brand: string
    order: number
    category: "clothing" | "accessory" | "shoes"
}