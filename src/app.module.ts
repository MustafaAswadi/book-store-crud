import { Module } from '@nestjs/common';
import { AppController } from './books/books.controller';
import { AppService } from './books/books.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
