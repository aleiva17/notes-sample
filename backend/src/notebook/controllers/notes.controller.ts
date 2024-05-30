import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';
import { NotesService } from '../domain/ports/notes.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Notes')
@Controller('api/v1/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a note' })
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a note by id' })
  delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all notes' })
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get note by id' })
  findById(@Param('id') id: string) {
    return this.notesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update note by id' })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }
}
