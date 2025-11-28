import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCrudDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}