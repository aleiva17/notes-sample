import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { NotesController } from './controllers/notes.controller';
import { NotesInfrastructureModule } from './infrastructure/notes-infrastructure.module';
import { NotesService } from './domain/ports/notes.service';
import { NotesServiceImpl } from './services/notes-impl.service';
import { TagsController } from './controllers/tags.controller';
import { TagsService } from './domain/ports/tags.service';
import { TagsServiceImpl } from './services/tags-impl.service';
import { NotesTagsController } from './controllers/notes-tags.controller';
import { NotesTagsServiceImpl } from './services/notes-tags-impl.service';
import { NotesTagsService } from './domain/ports/notes-tags.service';

@Module({
  imports: [CoreModule, NotesInfrastructureModule],
  controllers: [NotesController, TagsController, NotesTagsController],
  providers: [
    { provide: NotesService, useClass: NotesServiceImpl },
    { provide: TagsService, useClass: TagsServiceImpl },
    { provide: NotesTagsService, useClass: NotesTagsServiceImpl },
  ],
})
export class NotebookModule {}
