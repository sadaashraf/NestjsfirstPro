import { IsString, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateCrudDto {
  @IsString()
  @IsNotEmpty()
  name: string;


  @IsNumber()
  @IsOptional()
  age: number;

  @IsString()
  @IsNotEmpty()
  class: string;
}