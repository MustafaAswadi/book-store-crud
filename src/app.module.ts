import { Module } from '@nestjs/common';
import { AppController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksEntity } from './books/datastore/books.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'book_store',
      entities: [BooksEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
