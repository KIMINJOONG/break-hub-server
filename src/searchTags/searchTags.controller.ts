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
import { CreateSearchTagDto } from './dto/create-searchTags.dto.ts';
import { UpdateSearchTagDto } from './dto/update-searchTags.dto';
import { SearchTag } from './searchTag.entity';
import { SearchTagsService } from './searchTags.service';

@Controller('searchTags')
export class SearchTagsController {
  constructor(private readonly searchTagsService: SearchTagsService) {}

  @Get()
  getAll(): Promise<SearchTag[]> {
    return this.searchTagsService.getAll();
  }

  @Get('/:seq')
  getOne(@Param('seq') seq: number): Promise<SearchTag> {
    return this.searchTagsService.getOne(seq);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:seq')
  remove(
    @Param('seq') searchTagSeq: number,
  ): Promise<IBasicResponse<SearchTag>> {
    return this.searchTagsService.deleteOne(searchTagSeq);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() searchTagData: CreateSearchTagDto): Promise<SearchTag> {
    return this.searchTagsService.create(searchTagData);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:seq')
  patch(
    @Param('seq') searchTagSeq: number,
    @Body() updateData: UpdateSearchTagDto,
  ): Promise<IBasicResponse<SearchTag>> {
    return this.searchTagsService.update(searchTagSeq, updateData);
  }
}
