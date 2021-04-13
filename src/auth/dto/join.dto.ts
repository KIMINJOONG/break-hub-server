import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

@ApiTags('회원가입 요청 데이터')
export class JoinDto {
  @IsString()
  @ApiProperty({ type: String, description: '이메일' })
  readonly email: string;

  @IsString()
  @ApiProperty({ type: String, description: '이름' })
  readonly name: string;

  @IsString()
  @ApiProperty({ type: String, description: '비밀번호' })
  readonly password: string;

  @IsArray()
  @ApiProperty({ type: Array, description: '비밀번호 확인' })
  readonly passwordConfirm: number[];
}
