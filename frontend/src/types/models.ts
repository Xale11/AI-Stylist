export interface Outfit {
    head: {
        price: number
        name: string
        urls: string[]
        color: string
        reasoning: string
        description: string
        type: string
        category: "clothing" | "accessory" | "shoes"
    }[],
    torso: {
        price: number
        name: string
        urls: string[]
        color: string
        reasoning: string
        description: string
        type: string
        category: "clothing" | "accessory" | "shoes"
    }[],
    legs: {
        price: number
        name: string
        urls: string[]
        color: string
        reasoning: string
        description: string
        type: string
        category: "clothing" | "accessory" | "shoes"
    }[],
    feet: {
        price: number
        name: string
        urls: string[]
        color: string
        reasoning: string
        description: string
        type: string
        category: "clothing" | "accessory" | "shoes"
    }[],
  
  }