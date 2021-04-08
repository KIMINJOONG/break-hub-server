import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@ApiTags('게시글 생성 요청 데이터')
export class CreateBoardDto {
  @IsString()
  @ApiProperty({ type: String, description: '제목' })
  readonly title: string;

  @IsString()
  @ApiProperty({ type: String, description: '내용' })
  readonly content: string;

  @IsString()
  @ApiProperty({ type: String, description: '비디오 링크' })
  readonly videoUrl: string;

  @IsArray()
  @ApiProperty({ type: Array, description: '비디오 링크' })
  readonly searchTagSeqs: number[];

  @IsNumber()
  @ApiProperty({ type: Number, description: '비디오 링크' })
  readonly categorySeq: number;
}
