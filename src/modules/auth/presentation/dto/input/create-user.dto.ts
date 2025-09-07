import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @Length(9, 12)
    cellPhoneNumber: string;
  
    @Length(8, 8)
    dni: string;
  
    @IsNotEmpty()
    userName: string;
  
    @Length(6, 45)
    password: string;
  }