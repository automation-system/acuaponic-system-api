import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateDht22SensorDto{

    @IsNumber({ maxDecimalPlaces: 2 })
    @ApiProperty({
        description: "Temperatura en grados Celsius medida por el sensor",
        example: 24.75,
    })
    temperatureCelsius: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @ApiProperty({
        description: "Humedad relativa en porcentaje",
        example: 55.4,
    })
    humidity: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    @ApiPropertyOptional({
        description: "Temperatura en grados Fahrenheit (opcional)",
        example: 76.55,
    })
    temperatureFahrenheit?: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    @ApiPropertyOptional({
        description: "Temperatura en Kelvin (opcional)",
        example: 297.9,
    })
    temperatureKelvin?: number;
    
    @IsUUID()
    @IsOptional()
    @ApiPropertyOptional({
        description: "ID de la automatización a la que pertenece el sensor",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    automationId?: string;
}