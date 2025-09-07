export class Ds18b20SensorResponseDto {
    ds18b20SensorId: string;
    temperatureCelsius: number;
    temperatureFahrenheit?: number;
    temperatureKelvin?: number;
    automationId?: string;
    createdAt?: Date;    
}  