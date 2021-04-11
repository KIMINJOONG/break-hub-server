import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IBasicResponse } from 'src/responseData';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardsService.getAll();
  }

  @Get('/:seq')
  getOne(@Param('seq') seq: number): Promise<Board> {
    return this.boardsService.getOne(seq);
  }

  @Delete('/:seq')
  remove(@Param('seq') boardSeq: number): Promise<IBasicResponse<Board>> {
    return this.boardsService.deleteOne(boardSeq);
  }

  @Post()
  create(@Body() boardData: CreateBoardDto): Promise<IBasicResponse<Board>> {
    return this.boardsService.create(boardData);
  }

  @Patch('/:seq')
  patch(
    @Param('seq') boardSeq: number,
    @Body() updateData: UpdateBoardDto,
  ): Promise<IBasicResponse<Board>> {
    return this.boardsService.update(boardSeq, updateData);
  }
}
