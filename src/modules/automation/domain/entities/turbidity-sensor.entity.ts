export class TurbiditySensor {
    constructor(
      public turbiditySensorId: string,
      public analogDigitalConverter: number,
      public voltaje: number,
      public turbidity: number,
      public automationId: string,
      public createdAt?: Date,      
    ) {}
  }
  