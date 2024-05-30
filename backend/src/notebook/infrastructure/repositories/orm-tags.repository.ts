import { Injectable } from '@nestjs/common';
import { TagsRepository } from '../../domain/ports/tags.repository';
import { TagEntity } from '../../domain/entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrmTagsRepository implements TagsRepository {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  findAll(): Promise<Array<TagEntity>> {
    return this.tagRepository.find();
  }

  findAllByNoteId(id: string): Promise<Array<TagEntity>> {
    return this.tagRepository.findBy({ notes: { id: id } });
  }

  findById(id: string): Promise<TagEntity | null> {
    return this.tagRepository.findOneBy({ id: id });
  }

  findByName(name: string): Promise<TagEntity | null> {
    return this.tagRepository.findOneBy({ name: name });
  }

  existsByName(name: string): Promise<boolean> {
    return this.tagRepository.existsBy({ name: name });
  }

  persist(entity: TagEntity): Promise<TagEntity> {
    return this.tagRepository.save(entity);
  }

  async remove(entity: TagEntity): Promise<TagEntity> {
    return this.tagRepository.remove(entity);
  }

  update(entity: TagEntity): Promise<TagEntity> {
    return this.tagRepository.save(entity);
  }
}
