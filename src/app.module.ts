import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { SearchTagsModule } from './searchTags/searchTags.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auths.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BoardsModule,
    SearchTagsModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
