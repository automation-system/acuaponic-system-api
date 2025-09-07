import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";

export class UpdateActuatorDto {
  @IsString()
  @IsOptional()
  @Length(1, 50)
  @ApiPropertyOptional({
    description: "Nuevo tipo de actuador",
    example: "ventilador-1",
  })
  type?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Nuevo estado del actuador",
    example: false,
  })
  status?: boolean;
}
