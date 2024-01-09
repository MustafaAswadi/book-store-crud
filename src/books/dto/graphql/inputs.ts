import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  title: string;
  genre: string;
  description: string;
  authorId: string;
  pages: number;
  imageUrl: string;
  buyUrl: string;
}

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {}
