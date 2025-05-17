// Price calculation logic for the mirror calculator

interface MirrorOptions {
    mirrorType: string
    width?: number
    height?: number
    diameter?: number
    edgeType: string
    mountingType: string
  }
  
  // Base prices for different mirror types (per square cm)
  const BASE_PRICES = {
    rectangular: 0.0175,
    round: 0.06,
    oval: 0.07,
    rectangularRoundedCorners: 0.065,
    rectangularIrregularCorners: 0.075,
    custom: 0.09,
  }
  
  // Multipliers for different edge types
  const EDGE_MULTIPLIERS = {
    straight: 0,
    beveled: 0,
    polished: 0,
    custom: 0,
 }
  
  // Additional costs for mounting types
  const MOUNTING_COSTS = {
    wall: 0,
    standing: 0,
    hanging: 0,
    custom: 0,
  }
  
  // Calculate the area of the mirror based on its type and dimensions
  function calculateArea(options: MirrorOptions): number {
    const { mirrorType, width = 0, height = 0, diameter = 0 } = options
  
    switch (mirrorType) {
      case "round":
        // Area of a circle: π * r²
        const radius = diameter / 2
        return Math.PI * radius * radius
  
      case "oval":
        // Approximation of oval area: π * a * b (where a and b are semi-major and semi-minor axes)
        return Math.PI * (width / 2) * (height / 2)
  
      case "rectangular":
        return width * height
      case "rectangularRoundedCorners":
      case "rectangularIrregularCorners":
      case "custom":
      default:
        // Area of a rectangle: width * height
        return width * height
    }
  }
  
  // Calculate the price of the mirror based on all options
  export function calculateMirrorPrice(options: MirrorOptions): number {
    // Calculate the area
    const area = calculateArea(options)
  
    // Get the base price per square cm for this mirror type
    const basePrice = BASE_PRICES[options.mirrorType as keyof typeof BASE_PRICES] || BASE_PRICES.rectangular
  
    // Get the multiplier for the edge type
    const edgeMultiplier =
      EDGE_MULTIPLIERS[options.edgeType as keyof typeof EDGE_MULTIPLIERS] || EDGE_MULTIPLIERS.straight
  
    // Get the additional cost for the mounting type
    const mountingCost = MOUNTING_COSTS[options.mountingType as keyof typeof MOUNTING_COSTS] || MOUNTING_COSTS.wall
  
    // Calculate the base cost of the mirror (area * price per square cm)
    const baseCost = area * basePrice
  
    // Apply the edge multiplier
    const costWithEdge = baseCost * edgeMultiplier
  
    // Add the mounting cost
    const totalCost = baseCost + costWithEdge + mountingCost
  
    // Add a minimum price floor
    const minimumPrice = 50
  
    // Return the higher of the calculated price or the minimum price
    return Math.max(totalCost, minimumPrice)
  }
  