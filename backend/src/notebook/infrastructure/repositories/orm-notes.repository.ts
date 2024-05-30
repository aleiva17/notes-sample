import { NotesRepository } from '../../domain/ports/notes.repository';
import { NoteEntity } from '../../domain/entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmNotesRepository implements NotesRepository {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  findAll(): Promise<Array<NoteEntity>> {
    return this.noteRepository.find();
  }

  findById(id: string): Promise<NoteEntity | null> {
    return this.noteRepository.findOneBy({ id: id });
  }

  existsById(id: string): Promise<boolean> {
    return this.noteRepository.existsBy({ id: id });
  }

  persist(entity: NoteEntity): Promise<NoteEntity> {
    return this.noteRepository.save(entity);
  }

  remove(entity: NoteEntity): Promise<NoteEntity> {
    return this.noteRepository.remove(entity);
  }

  update(entity: NoteEntity): Promise<NoteEntity> {
    // We can also use .update if we want special conditions and avoid cascade effect
    // but this is not the case, so we use the default recommendation from the docs.
    return this.noteRepository.save(entity);
  }
}
