import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
