import { TagsService } from '../domain/ports/tags.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TagsRepository } from '../domain/ports/tags.repository';
import { TagEntity } from '../domain/entities/tag.entity';
import { CreateTagDto } from '../controllers/dtos/create-tag.dto';
import { UpdateTagDto } from '../controllers/dtos/update-tag.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class TagsServiceImpl implements TagsService {
  constructor(private readonly tagsRepository: TagsRepository) {}

  async create(createNoteDto: CreateTagDto): Promise<TagEntity> {
    if (await this.tagsRepository.existsByName(createNoteDto.name)) {
      throw new BadRequestException(
        `There's an existing tag with the same name`,
      );
    }

    const newTag = new TagEntity();
    newTag.name = createNoteDto.name;

    return this.tagsRepository.persist(newTag);
  }

  async delete(id: string): Promise<TagEntity> {
    const entity = await this.findById(id);
    return this.tagsRepository.remove(entity);
  }

  findAll(): Promise<Array<TagEntity>> {
    return this.tagsRepository.findAll();
  }

  async findById(id: string): Promise<TagEntity> {
    if (!isUUID(id)) {
      throw new NotFoundException(`Tag with id '${id}' not found`);
    }

    const entity = await this.tagsRepository.findById(id);

    if (entity === null) {
      throw new NotFoundException(`Tag with id '${id}' not found`);
    }

    return entity;
  }

  async findByName(name: string): Promise<TagEntity> {
    const entity = await this.tagsRepository.findByName(name);

    if (entity === null) {
      throw new NotFoundException(`Tag with name '${name}' not found`);
    }

    return entity;
  }

  existsByName(name: string): Promise<boolean> {
    return this.tagsRepository.existsByName(name);
  }

  async update(id: string, updateTagDto: UpdateTagDto): Promise<TagEntity> {
    const entity = await this.findById(id);
    const existingEntityWithSameName = await this.tagsRepository.findByName(
      updateTagDto.name,
    );

    if (existingEntityWithSameName && existingEntityWithSameName.id !== id) {
      throw new BadRequestException(
        `There's an existing tag with the same name`,
      );
    }

    entity.name = updateTagDto.name;

    return this.tagsRepository.update(entity);
  }
}
