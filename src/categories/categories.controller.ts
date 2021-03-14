import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get('/:seq')
  getOne(@Param('seq') seq: number): Promise<Category> {
    return this.categoriesService.getOne(seq);
  }

  @Delete('/:seq')
  remove(@Param('seq') boardSeq: number) {
    return this.categoriesService.deleteOne(boardSeq);
  }

  @Post()
  create(@Body() boardData: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(boardData);
  }

  @Patch('/:seq')
  patch(@Param('seq') boardSeq: number, @Body() updateData: UpdateCategoryDto) {
    return this.categoriesService.update(boardSeq, updateData);
  }
}
