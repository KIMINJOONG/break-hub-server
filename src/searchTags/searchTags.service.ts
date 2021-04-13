import { Injectable, NotFoundException } from '@nestjs/common';
import { BasicResponseFormat, IBasicResponse } from 'src/responseData';
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

  async deleteOne(searchTagSeq: number): Promise<IBasicResponse<SearchTag>> {
    try {
      const searchTag: SearchTag = await this.getOne(searchTagSeq);
      const seq = searchTag.seq;

      const result = await searchTag.remove();
      result.seq = seq;
      const response = BasicResponseFormat(200, '삭제되었습니다', result);
      return response;
    } catch (error) {}
  }

  async create(searchTagData: CreateSearchTagDto): Promise<SearchTag> {
    try {
      const searchTag: SearchTag = await SearchTag.create({
        ...searchTagData,
      }).save();
      return searchTag;
    } catch (error) {
      console.log(error);
    }
  }
  async update(
    searchTagSeq: number,
    updateData: UpdateSearchTagDto,
  ): Promise<IBasicResponse<SearchTag>> {
    try {
      const searchTag: SearchTag = await this.getOne(searchTagSeq);
      SearchTag.update({ seq: searchTag.seq }, { ...updateData });
      const updatedTag: SearchTag = await this.getOne(searchTagSeq);
      const response = BasicResponseFormat(200, '수정되었습니다', updatedTag);
      return response;
    } catch (error) {}
  }
}
