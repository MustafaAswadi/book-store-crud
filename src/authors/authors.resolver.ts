import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from './dto/graphql/types';
import { AuthorsService } from './authors.service';
import { MapEntityToDomain } from './datastore/entity-to-domain.mapper';
import { CreateAuthorInput, UpdateAuthorInput } from './dto/graphql/inputs';

@Injectable()
@Resolver(Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    const res = await this.authorsService.findAll();
    return res.map(MapEntityToDomain);
  }

  @Query(() => Author)
  async author(@Args('id') id: string): Promise<Author> {
    const res = await this.authorsService.findOne(id);
    return MapEntityToDomain(res);
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput): Promise<Author> {
    const res = await this.authorsService.create(input);
    return MapEntityToDomain(res);
  }

  @Mutation(() => Author)
  async updateAuthor(@Args('input') input: UpdateAuthorInput): Promise<Author> {
    const res = await this.authorsService.update(input);
    return MapEntityToDomain(res);
  }

  @Mutation(() => Boolean)
  async removeAuthor(@Args('id') id: string): Promise<boolean> {
    return this.authorsService.remove(id);
  }
}
