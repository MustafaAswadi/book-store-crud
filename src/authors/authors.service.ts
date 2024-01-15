import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './datastore/authors.entity';
import { Repository } from 'typeorm';
import { MapEntityToDomain } from './datastore/entity-to-domain.mapper';
import { AuthorDomain } from './authors.domain';
import { CreateAuthorInput, UpdateAuthorInput } from './dto/graphql/inputs';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<AuthorDomain[]> {
    const res = await this.authorRepository.find();
    return res.map(MapEntityToDomain);
  }

  async findOne(id: string): Promise<AuthorDomain> {
    const res = await this.authorRepository.findOne({ where: { id } });
    return MapEntityToDomain(res);
  }

  async create(author: CreateAuthorInput): Promise<AuthorDomain> {
    const res = await this.authorRepository.save(author);
    return MapEntityToDomain(res);
  }

  async update(author: UpdateAuthorInput): Promise<AuthorDomain> {
    const res = await this.authorRepository.save(author);
    return MapEntityToDomain(res);
  }

  async remove(id: string): Promise<boolean> {
    await this.authorRepository.delete({ id });
    return true;
  }
}
