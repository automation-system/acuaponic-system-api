export class Dht22Sensor {
    constructor(
      public dht22SensorId: string,
      public temperatureCelsius: number,
      public temperatureFahrenheit: number,
      public temperatureKelvin: number,
      public humidity: number,
      public createdAt: Date,
      public automationId: string,
    ) {}
  }
  