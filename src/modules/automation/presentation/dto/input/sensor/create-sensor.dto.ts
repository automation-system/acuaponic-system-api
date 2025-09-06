import { IsOptional, IsString, IsUUID, Length } from "class-validator";

export class CreateSensorDto {
    
    @IsString()
    @Length(1, 45)
    name: string;      
      
    @IsString()
    data: string;
      
    @IsString() 
    @IsOptional()
    code?: string;
    
    @IsUUID()
    @IsOptional()
    automationId?: string;
}