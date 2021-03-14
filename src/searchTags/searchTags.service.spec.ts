import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchTagsService } from './searchTags.service';

describe('boards Service', () => {
  let service: SearchTagsService;

  beforeEach(async () => {
    jest.useFakeTimers();
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'PASSWORD',
          database: 'b_hub',
          entities: ['src/**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
      ],
      providers: [SearchTagsService],
    }).compile();

    service = module.get<SearchTagsService>(SearchTagsService);
  });

  describe('create', () => {
    it('생성한 게시글을 리턴해야한다', async () => {
      const searchTag = await service.create({
        name: '스타일적인',
      });

      expect(searchTag).toBeDefined();
      expect(searchTag.name).toEqual('스타일적인');
    });
  });
});
