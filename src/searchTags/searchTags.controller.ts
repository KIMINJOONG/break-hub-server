import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Delete('/:seq')
  remove(@Param('seq') searchTagSeq: number) {
    return this.searchTagsService.deleteOne(searchTagSeq);
  }

  @Post()
  create(@Body() searchTagData: CreateSearchTagDto): Promise<SearchTag> {
    return this.searchTagsService.create(searchTagData);
  }

  @Patch('/:seq')
  patch(
    @Param('seq') searchTagSeq: number,
    @Body() updateData: UpdateSearchTagDto,
  ) {
    return this.searchTagsService.update(searchTagSeq, updateData);
  }
}
