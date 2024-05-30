import { CreateNoteDto } from '../../controllers/dtos/create-note.dto';
import { NoteEntity } from '../entities/note.entity';
import { UpdateNoteDto } from '../../controllers/dtos/update-note.dto';

export abstract class NotesService {
  abstract create(createNoteDto: CreateNoteDto): Promise<NoteEntity>;
  abstract delete(id: string): Promise<NoteEntity>;
  abstract findAll(): Promise<Array<NoteEntity>>;
  abstract findById(id: string): Promise<NoteEntity>;
  abstract update(
    id: string,
    updateNoteDto: UpdateNoteDto,
  ): Promise<NoteEntity>;
}
