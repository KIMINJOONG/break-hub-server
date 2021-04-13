import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@ApiTags('게시글 생성 요청 데이터')
export class LoginDto {
  @IsString()
  @ApiProperty({ type: String, description: '이메일' })
  readonly email: string;

  @IsString()
  @ApiProperty({ type: String, description: '비밀번호' })
  readonly password: string;
}
