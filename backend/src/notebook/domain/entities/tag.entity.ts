import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NoteEntity } from './note.entity';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    transformer: {
      to: (value: string | null) => value?.toLowerCase(),
      from: (value: string | null) => value?.toLowerCase(),
    },
  })
  @Index({ unique: true })
  name: string;

  @ManyToMany(() => NoteEntity, (note) => note.tags, { cascade: ['remove'] })
  notes: Array<NoteEntity>;
}
