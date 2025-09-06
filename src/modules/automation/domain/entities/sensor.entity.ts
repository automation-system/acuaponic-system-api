export class Sensor {
    constructor(
      public sensorId: number,
      public name: string,      
      public data: string,
      public code?: string,
      public createdAt?: Date,
      public automationId?: string,
    ) {}
  }
  