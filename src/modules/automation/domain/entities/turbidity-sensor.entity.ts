export class TurbiditySensor {
    constructor(
      public turbiditySensorId: string,
      public turbidity: number,
      public analogDigitalConverter?: number,
      public voltaje?: number,            
      public createdAt?: Date,      
      public automationId?: string,
    ) {}
  }
  