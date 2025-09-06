import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateDs18b20SensorDto {

    @IsNumber({ maxDecimalPlaces: 2 })
    temperatureCelsius: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsOptional()
    temperatureFahrenheit?: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsOptional()
    temperatureKelvin?: number;

    @IsUUID()
    @IsOptional()
    automationId?: string;
}