import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateUltrasonicDistanceSensorDto {
         
    @IsNumber({ maxDecimalPlaces: 2 })
    distance: number;
        
    @IsOptional()   
    time?: number;
    
    @IsUUID()
    @IsOptional()
    automationId?: string;
}