import { IsNumber, IsOptional } from "class-validator";

export class CreateTurbiditySensorDto {
    
    @IsNumber()
    turbidity: number;
      
    @IsOptional()
    @IsNumber()
    analogDigitalConverter?: number;
      
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 }) 
    voltaje?: number;   
    
    @IsOptional()
    automationId?: string;
}