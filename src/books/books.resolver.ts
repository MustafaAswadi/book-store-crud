import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './dto/graphql/types';
import { BooksService } from './books.service';
import { MapDomainToGqlDto } from './mappers/map-domain-to-gql-dto';
import { CreateBookInput, UpdateBookInput } from './dto/graphql/inputs';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => Book)
  async book(@Args('id') id: string): Promise<Book> {
    const res = await this.booksService.getOneById(id);
    return MapDomainToGqlDto(res);
  }

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    const res = await this.booksService.getAll();
    return res.map(MapDomainToGqlDto);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
    const res = await this.booksService.create(input);
    return MapDomainToGqlDto(res);
  }

  @Mutation(() => Boolean)
  async deleteBook(@Args('id') id: string): Promise<boolean> {
    return this.booksService.delete(id);
  }

  @Mutation(() => Boolean)
  async updateBook(
    @Args('id') id: string,
    @Args('input') input: UpdateBookInput,
  ): Promise<boolean> {
    return this.booksService.update(id, input);
  }
}
