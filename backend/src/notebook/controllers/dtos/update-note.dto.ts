import { CreateNoteDto } from './create-note.dto';
import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  @IsBoolean()
  @IsOptional()
  isArchived: boolean;
}
