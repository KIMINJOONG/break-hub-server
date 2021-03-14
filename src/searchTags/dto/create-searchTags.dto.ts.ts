import { IsString } from 'class-validator';

export class CreateSearchTagDto {
  @IsString()
  name: string;
}
