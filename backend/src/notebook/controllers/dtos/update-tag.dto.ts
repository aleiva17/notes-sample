import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  name: string;
}
