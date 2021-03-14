import { SearchTag } from '../searchTags/searchTag.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';

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

  @ManyToOne(() => Category, (category) => category.boards)
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
