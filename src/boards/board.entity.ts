import { SearchTag } from '../searchTags/searchTag.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  videoUrl: string;

  @ManyToMany(() => SearchTag, (searchTag) => searchTag.boards)
  @JoinTable()
  searchTags: SearchTag[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
