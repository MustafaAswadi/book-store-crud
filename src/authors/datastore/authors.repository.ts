import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthorEntity } from './authors.entity';

@Injectable()
export class AuthorsRepository extends Repository<AuthorEntity> {}
