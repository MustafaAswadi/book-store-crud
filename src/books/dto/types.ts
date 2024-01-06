import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
