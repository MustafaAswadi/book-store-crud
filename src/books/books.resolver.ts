import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './dto/types';

@Resolver(() => Book)
export class BooksResolver {
  @Query(() => Book)
  async book() {
    return {
      id: '1',
      title: 'The Lord of the Rings',
    };
  }
}
