import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from '../domain/entities/note.entity';
import { NotesRepository } from '../domain/ports/notes.repository';
import { OrmNotesRepository } from './repositories/orm-notes.repository';
import { TagEntity } from '../domain/entities/tag.entity';
import { TagsRepository } from '../domain/ports/tags.repository';
import { OrmTagsRepository } from './repositories/orm-tags.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity, TagEntity])],
  providers: [
    { provide: NotesRepository, useClass: OrmNotesRepository },
    { provide: TagsRepository, useClass: OrmTagsRepository },
  ],
  exports: [NotesRepository, TagsRepository],
})
export class NotesInfrastructureModule {}
