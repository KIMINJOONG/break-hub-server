import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchTagsService } from '../searchTags/searchTags.service';
import { Board } from './board.entity';
import { BoardsService } from './auth.service';

describe('boards Service', () => {
  let service: BoardsService;

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
      providers: [BoardsService, SearchTagsService],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  describe('create', () => {
    it('생성한 게시글을 리턴해야한다', async () => {
      const searchTagSeqs: number[] = [1, 2];

      const board: Board = await service.create({
        title: '제목',
        content: '내용',
        videoUrl: 'https://www.naver.com',
        searchTagSeqs,
      });
      console.log(board);
      expect(board).toBeDefined();
      expect(board.title).toEqual('제목');
    });
  });
});
