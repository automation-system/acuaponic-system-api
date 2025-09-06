import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateDht22SensorDto{

    @IsNumber({ maxDecimalPlaces: 2 })
    temperatureCelsius: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    humidity: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    temperatureFahrenheit?: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    temperatureKelvin?: number;
    
    @IsUUID()
    @IsOptional()
    automationId?: string;
}