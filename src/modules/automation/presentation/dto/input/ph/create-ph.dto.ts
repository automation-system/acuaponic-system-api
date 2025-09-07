import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreatePhDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    description: "Valor de pH medido por el sensor",
    example: 7.02,
  })
  phValue: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiPropertyOptional({
    description: "Conversor analógico-digital usado (opcional)",
    example: 2050,
  })
  analogDigitalConverter?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiPropertyOptional({
    description: "Voltaje en voltios (opcional)",
    example: 1.65,
  })
  voltaje?: number;
  
  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({
    description: "ID de la automatización a la que pertenece el sensor",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  automationId?: string;
}
