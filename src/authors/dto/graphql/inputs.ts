import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  birthDate: Date;
}

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {}
