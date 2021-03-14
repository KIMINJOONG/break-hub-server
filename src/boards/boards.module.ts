import { Module } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { SearchTagsService } from '../searchTags/searchTags.service';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, SearchTagsService, CategoriesService],
})
export class BoardsModule {}
