export class Ds18b20Sensor {
    constructor(
      public ds18b20SensorId: string,
      public temperatureCelsius: number,
      public temperatureFahrenheit?: number,
      public temperatureKelvin?: number,
      public automationId?: string,
      public createdAt?: Date,      
    ) {}
}  