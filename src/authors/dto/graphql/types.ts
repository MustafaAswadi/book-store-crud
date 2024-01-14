import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  birthDate: Date;
}
