import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesTagsService } from '../domain/ports/notes-tags.service';
import { AddTagToNoteDto } from './dtos/add-tag-to-note.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Tags by note')
@Controller('api/v1/notes/:noteId/tags')
export class NotesTagsController {
  constructor(private readonly notesTagsService: NotesTagsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tags from note with id' })
  findTagsByNoteId(@Param('noteId') noteId: string) {
    return this.notesTagsService.findTagsByNoteId(noteId);
  }

  @Post()
  @ApiOperation({ summary: 'Add tag by name to note with id' })
  async addTagToNote(
    @Param('noteId') noteId: string,
    @Body() addTagToNoteDto: AddTagToNoteDto,
  ) {
    return this.notesTagsService.addTagToNoteId(addTagToNoteDto, noteId);
  }

  @Delete(':tagId')
  @ApiOperation({ summary: 'Remove tag by id from note with id' })
  async deleteTagFromNote(
    @Param('noteId') noteId: string,
    @Param('tagId') tagId: string,
  ) {
    return this.notesTagsService.removeTagFromNoteId(tagId, noteId);
  }
}
