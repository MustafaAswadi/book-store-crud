import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  genre: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  authorId: string;

  @Field(() => Number)
  pages: number;

  @Field(() => String)
  imageUrl: string;

  @Field(() => String)
  buyUrl: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
