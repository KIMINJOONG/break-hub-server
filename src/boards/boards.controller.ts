import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Post()
  create(@Body() boardData: CreateBoardDto): Promise<Board> {
    return this.boardsService.create(boardData);
  }

  @Patch('/:seq')
  patch(@Param('seq') boardSeq: number, @Body() updateData: UpdateBoardDto) {
    return this.boardsService.update(boardSeq, updateData);
  }
}
