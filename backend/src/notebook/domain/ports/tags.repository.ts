import { TagEntity } from '../entities/tag.entity';

// We can use interfaces instead of abstract classes, but abstract
// classes serve as injection tokens in NestJS (and interfaces not).
export abstract class TagsRepository {
  abstract findAll(): Promise<Array<TagEntity>>;
  abstract findAllByNoteId(id: string): Promise<Array<TagEntity>>;
  abstract findById(id: string): Promise<TagEntity | null>;
  abstract findByName(name: string): Promise<TagEntity | null>;
  abstract existsByName(name: string): Promise<boolean>;
  abstract remove(entity: TagEntity): Promise<TagEntity>;
  abstract update(entity: TagEntity): Promise<TagEntity>;
  abstract persist(entity: TagEntity): Promise<TagEntity>;
}
