import { IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreatePhDto{

    @IsNumber({ maxDecimalPlaces: 2 })
    phValue: number;
    
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })    
    analogDigitalConverter?: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    voltaje?: number;

    @IsOptional()
    @IsUUID()
    automationId?: string;
}