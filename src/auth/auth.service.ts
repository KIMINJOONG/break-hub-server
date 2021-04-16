import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { JoinDto } from './dto/join.dto';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async join(joinData: JoinDto) {
    const user = User.find({ where: { email: joinData.email } });
    if (user) {
      console.log('중복에러');
    }
    const newUser = await User.create(joinData);

    return;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await User.findOne({ where: { email } });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { name: user.name, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      message: '로그인되었습니다.',
      data: user,
    };
  }
}
