import { IsDate, IsOptional, IsString, Length } from "class-validator";

export class CreateAutomationDTO{
    @IsString()
    @Length(1,150)
    type: string;

    @IsString()
    @Length(1,150)
    name: string;

    @IsDate()
    startDate: Date;

    @IsString()
    @IsOptional()
    @Length(1,150)
    address?: string;

    @IsDate()
    @IsOptional()
    endDate?: Date;
}