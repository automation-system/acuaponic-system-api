import { IsBoolean, IsOptional, IsString, IsUUID, Length } from "class-validator";

export class CreateActuatorDto {
    
    @IsString()
    @Length(1, 50)
    type: string;
    
    @IsBoolean()
    status: boolean;
    
    @IsOptional()
    createdAt?: Date;
    
    @IsOptional()
    updatedAt?: Date;
    
    @IsUUID()
    @IsOptional()
    automationId?: string;
}