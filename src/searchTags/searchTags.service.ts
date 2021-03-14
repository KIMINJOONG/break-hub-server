import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSearchTagDto } from './dto/create-searchTags.dto.ts';
import { UpdateSearchTagDto } from './dto/update-searchTags.dto';
import { SearchTag } from './searchTag.entity';

@Injectable()
export class SearchTagsService {
  async getAll(): Promise<SearchTag[]> {
    const searchTags = await SearchTag.find({ relations: ['boards'] });
    return searchTags;
  }

  async getOne(seq: number): Promise<SearchTag> {
    try {
      const searchTag: SearchTag = await SearchTag.findOne({
        where: { seq },
        relations: ['boards'],
      });
      if (!searchTag) {
        throw new NotFoundException(
          `Movie with ID ${searchTag.seq} not found.`,
        );
      }
      return searchTag;
    } catch (error) {}
  }

  async deleteOne(searchTagSeq: number): Promise<SearchTag> {
    try {
      const searchTag: SearchTag = await this.getOne(searchTagSeq);
      await searchTag.remove();
      return searchTag;
    } catch (error) {}
  }

  async create(searchTagData: CreateSearchTagDto): Promise<SearchTag> {
    try {
      const searchTag: SearchTag = SearchTag.create(searchTagData);
      searchTag.save();
      return searchTag;
    } catch (error) {
      console.log(error);
    }
  }
  async update(searchTagSeq: number, updateData: UpdateSearchTagDto) {
    try {
      const searchTag: SearchTag = await this.getOne(searchTagSeq);
      SearchTag.update({ seq: searchTag.seq }, { ...updateData });
      return searchTag;
    } catch (error) {}
  }
}
