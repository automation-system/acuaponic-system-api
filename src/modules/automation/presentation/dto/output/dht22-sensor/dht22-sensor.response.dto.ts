export class Dht22SensorResponseDto {
    dht22SensorId: string;
    temperatureCelsius: number;
    temperatureFahrenheit?: number;
    temperatureKelvin?: number;
    humidity: number;
    createdAt?: Date;
    automationId?: string;
}  