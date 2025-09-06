export class Dht22Sensor {
    constructor(
      public dht22SensorId: string,
      public temperatureCelsius: number,
      public humidity: number,
      public temperatureFahrenheit?: number,
      public temperatureKelvin?: number,      
      public createdAt?: Date,
      public automationId?: string,
    ) {}
  }
  