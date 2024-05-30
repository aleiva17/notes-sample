import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TagEntity } from './tag.entity';

@Entity('notes')
export class NoteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  isArchived: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => TagEntity, (tag) => tag.notes, {
    eager: true,
    cascade: ['insert'],
  })
  @JoinTable({
    name: 'notes_tags',
    joinColumn: {
      name: 'note_id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
    },
  })
  tags: Array<TagEntity>;
}
