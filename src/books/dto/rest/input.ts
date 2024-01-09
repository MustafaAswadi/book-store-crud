export class CreateBookDto {
  title: string;
  genre: string;
  description: string;
  authorId: string;
  pages: number;
  imageUrl: string;
  buyUrl: string;
}

export class UpdateBookDto {
  title?: string;
  genre?: string;
  description?: string;
  authorId?: string;
  pages?: number;
  imageUrl?: string;
  buyUrl?: string;
}
