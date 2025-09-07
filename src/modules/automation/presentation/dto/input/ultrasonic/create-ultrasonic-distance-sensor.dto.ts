import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateUltrasonicDistanceSensorDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    description: "Distancia medida en centímetros",
    example: 123.45,
  })
  distance: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Tiempo de respuesta del sensor en microsegundos (opcional)",
    example: 250,
  })
  time?: number;
  
  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({
    description: "ID de la automatización a la que pertenece el sensor",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  automationId?: string;
}