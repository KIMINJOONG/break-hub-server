import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Delete('/:seq')
  remove(@Param('seq') boardSeq: number): Promise<IBasicResponse<Board>> {
    return this.boardsService.deleteOne(boardSeq);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() boardData: CreateBoardDto): Promise<IBasicResponse<Board>> {
    return this.boardsService.create(boardData);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:seq')
  patch(
    @Param('seq') boardSeq: number,
    @Body() updateData: UpdateBoardDto,
  ): Promise<IBasicResponse<Board>> {
    return this.boardsService.update(boardSeq, updateData);
  }
}
