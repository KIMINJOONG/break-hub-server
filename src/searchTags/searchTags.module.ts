import { Module } from '@nestjs/common';
import { SearchTagsController } from './searchTags.controller';
import { SearchTagsService } from './searchTags.service';

@Module({
  controllers: [SearchTagsController],
  providers: [SearchTagsService],
})
export class SearchTagsModule {}
