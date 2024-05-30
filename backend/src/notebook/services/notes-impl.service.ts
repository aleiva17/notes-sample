import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from '../controllers/dtos/create-note.dto';
import { NotesRepository } from '../domain/ports/notes.repository';
import { NoteEntity } from '../domain/entities/note.entity';
import { UpdateNoteDto } from '../controllers/dtos/update-note.dto';
import { NotesService } from '../domain/ports/notes.service';
import { isUUID } from 'class-validator';

@Injectable()
export class NotesServiceImpl implements NotesService {
  constructor(private readonly noteRepository: NotesRepository) {}

  create(createNoteDto: CreateNoteDto) {
    const newNote = new NoteEntity();
    newNote.title = createNoteDto.title;
    newNote.content = createNoteDto.content;
    return this.noteRepository.persist(newNote);
  }

  async delete(id: string) {
    const entity = await this.findById(id);
    return this.noteRepository.remove(entity);
  }

  findAll() {
    return this.noteRepository.findAll();
  }

  async findById(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException(`Note with id '${id}' not found`);
    }

    const entity = await this.noteRepository.findById(id);

    if (entity === null) {
      throw new NotFoundException(`Note with id '${id}' not found`);
    }

    return entity;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const entity = await this.findById(id);

    entity.title = updateNoteDto.title || entity.title;
    entity.content = updateNoteDto.content || entity.content;
    entity.isArchived =
      updateNoteDto.isArchived !== undefined
        ? updateNoteDto.isArchived
        : entity.isArchived;

    return this.noteRepository.update(entity);
  }
}
