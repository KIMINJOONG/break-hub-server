import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Board } from '../boards/board.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;

  @OneToMany(() => Board, (board) => board.category)
  boards: Board[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
