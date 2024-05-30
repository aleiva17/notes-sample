import { TagEntity } from '../entities/tag.entity';
import { CreateTagDto } from '../../controllers/dtos/create-tag.dto';
import { UpdateTagDto } from '../../controllers/dtos/update-tag.dto';

export abstract class TagsService {
  abstract create(createTagDto: CreateTagDto): Promise<TagEntity>;
  abstract delete(id: string): Promise<TagEntity>;
  abstract findAll(): Promise<Array<TagEntity>>;
  abstract findById(id: string): Promise<TagEntity>;
  abstract findByName(name: string): Promise<TagEntity>;
  abstract existsByName(name: string): Promise<boolean>;
  abstract update(id: string, updateTagDto: UpdateTagDto): Promise<TagEntity>;
}
