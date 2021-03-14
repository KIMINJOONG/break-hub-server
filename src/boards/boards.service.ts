import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { SearchTag } from '../searchTags/searchTag.entity';
import { SearchTagsService } from '../searchTags/searchTags.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    private readonly searchTags: SearchTagsService,
    private readonly categoriesService: CategoriesService,
  ) {}
  async getAll(): Promise<Board[]> {
    const boards = await Board.find({
      relations: ['searchTags', 'category'],
    });
    return boards;
  }

  async getOne(seq: number): Promise<Board> {
    try {
      const board: Board = await Board.findOne({
        where: { seq },
        relations: ['searchTags', 'category'],
      });
      if (!board) {
        throw new NotFoundException(`Board with ID ${board.seq} not found.`);
      }
      return board;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOne(boardSeq: number): Promise<Board> {
    try {
      const board: Board = await this.getOne(boardSeq);
      await board.remove();
      return board;
    } catch (error) {}
  }

  async create(boardData: CreateBoardDto): Promise<Board> {
    try {
      const board: Board = Board.create({
        title: boardData.title,
        content: boardData.content,
        videoUrl: boardData.videoUrl,
        searchTags: [],
      });

      const category = await this.categoriesService.getOne(
        boardData.categorySeq,
      );
      board.category = category;

      for (const searchTagSeq of boardData.searchTagSeqs) {
        const searchTag: SearchTag = await this.searchTags.getOne(searchTagSeq);
        board.searchTags.push(searchTag);
      }
      await board.save();
      return board;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async update(seq: number, updateData: UpdateBoardDto): Promise<Board> {
    try {
      const board: Board = await this.getOne(seq);
      const searchTags: SearchTag[] = [];
      for (const searchTagSeq of updateData.searchTagSeqs) {
        const searchTag: SearchTag = await this.searchTags.getOne(searchTagSeq);
        if (searchTag) {
          searchTags.push(searchTag);
        }
      }
      board.title = updateData.title;
      board.content = updateData.content;
      board.videoUrl = updateData.videoUrl;
      board.searchTags = searchTags;
      await board.save();

      return board;
    } catch (error) {}
  }
}
