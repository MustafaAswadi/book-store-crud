import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BooksEntity } from './books.entity';

@Injectable()
export class BooksRepository extends Repository<BooksEntity> {}
