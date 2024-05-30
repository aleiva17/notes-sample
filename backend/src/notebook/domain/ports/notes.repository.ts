import { NoteEntity } from '../entities/note.entity';

// We can use interfaces instead of abstract classes, but abstract
// classes serve as injection tokens in NestJS (and interfaces not).
export abstract class NotesRepository {
  abstract findAll(): Promise<Array<NoteEntity>>;
  abstract findById(id: string): Promise<NoteEntity | null>;
  abstract remove(entity: NoteEntity): Promise<NoteEntity>;
  abstract update(entity: NoteEntity): Promise<NoteEntity>;
  abstract persist(entity: NoteEntity): Promise<NoteEntity>;
  abstract existsById(id: string): Promise<boolean>;
}
