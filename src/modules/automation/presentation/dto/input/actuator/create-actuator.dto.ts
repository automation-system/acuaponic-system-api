import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, IsUUID, Length } from "class-validator";

export class CreateActuatorDto {
    
    @IsString()
    @Length(1, 50)
    @ApiProperty({
        description: "Tipo de actuador (ej. bomba de agua, ventilador, luz)",
        example: "motor-1",
        maxLength: 50,
    })
    type: string;
    
    @IsBoolean()
    @ApiProperty({
        description: "Estado actual del actuador (true=encendido, false=apagado)",
        example: true,
    })
    status: boolean;
    
    @IsUUID()
    @IsOptional()
    @ApiPropertyOptional({
        description: "ID de la automatización asociada",
        format: "uuid",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    automationId?: string;
}