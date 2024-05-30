import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TagEntity } from '../domain/entities/tag.entity';
import { NotesTagsService } from '../domain/ports/notes-tags.service';
import { TagsRepository } from '../domain/ports/tags.repository';
import { NotesRepository } from '../domain/ports/notes.repository';
import { AddTagToNoteDto } from '../controllers/dtos/add-tag-to-note.dto';
import { isUUID } from 'class-validator';
import { NoteEntity } from '../domain/entities/note.entity';

@Injectable()
export class NotesTagsServiceImpl implements NotesTagsService {
  constructor(
    private readonly tagsRepository: TagsRepository,
    private readonly notesRepository: NotesRepository,
  ) {}

  async findTagsByNoteId(noteId: string): Promise<Array<TagEntity>> {
    if (!isUUID(noteId) || !(await this.notesRepository.existsById(noteId))) {
      throw new NotFoundException(`Note with id '${noteId}' not found`);
    }
    return this.tagsRepository.findAllByNoteId(noteId);
  }

  async addTagToNoteId(
    addTagToNoteDto: AddTagToNoteDto,
    noteId: string,
  ): Promise<NoteEntity> {
    if (!isUUID(noteId) || !(await this.notesRepository.existsById(noteId))) {
      throw new NotFoundException(`Note with id '${noteId}' not found`);
    }

    if (!(await this.tagsRepository.existsByName(addTagToNoteDto.name))) {
      await this.tagsRepository.persist({
        name: addTagToNoteDto.name,
      } as TagEntity);
    }

    const tag = await this.tagsRepository.findByName(addTagToNoteDto.name);
    const note = await this.notesRepository.findById(noteId);

    if (note.tags.some((t) => t.id === tag.id)) {
      throw new BadRequestException(
        `Tag '${tag.name}' already exists in note.`,
      );
    }

    note.tags.push(tag);
    return this.notesRepository.update(note);
  }

  async removeTagFromNoteId(
    tagId: string,
    noteId: string,
  ): Promise<NoteEntity> {
    if (!isUUID(noteId)) {
      throw new NotFoundException(`Note with id '${noteId}' not found`);
    }

    const note = await this.notesRepository.findById(noteId);

    if (note === null) {
      throw new NotFoundException(`Note with id '${noteId}' not found`);
    }

    note.tags = note.tags.filter((tag) => tag.id !== tagId);
    return this.notesRepository.update(note);
  }
}
