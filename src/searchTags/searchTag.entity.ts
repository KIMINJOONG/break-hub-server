import { Board } from '../boards/board.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SearchTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;

  @ManyToMany(() => Board, (board) => board.searchTags, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  boards: Board[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
