import { Module } from '@nestjs/common';
import { SearchTagsService } from 'src/searchTags/searchTags.service';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, SearchTagsService],
})
export class BoardsModule {}
