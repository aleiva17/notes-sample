import { TagEntity } from '../entities/tag.entity';
import { AddTagToNoteDto } from '../../controllers/dtos/add-tag-to-note.dto';
import { NoteEntity } from '../entities/note.entity';

export abstract class NotesTagsService {
  abstract findTagsByNoteId(noteId: string): Promise<Array<TagEntity>>;
  abstract removeTagFromNoteId(
    tagId: string,
    noteId: string,
  ): Promise<NoteEntity>;
  abstract addTagToNoteId(
    tag: AddTagToNoteDto,
    noteId: string,
  ): Promise<NoteEntity>;
}
