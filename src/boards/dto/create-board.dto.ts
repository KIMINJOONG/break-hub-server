import { IsArray, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly videoUrl: string;

  @IsArray()
  readonly searchTagSeqs: number[];
}
