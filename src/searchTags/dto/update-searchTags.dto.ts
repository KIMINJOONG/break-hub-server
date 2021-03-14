import { PartialType } from '@nestjs/mapped-types';
import { CreateSearchTagDto } from './create-searchTags.dto.ts';

export class UpdateSearchTagDto extends PartialType(CreateSearchTagDto) {}
