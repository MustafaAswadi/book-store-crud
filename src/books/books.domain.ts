export interface BookDomain {
  id: string;
  title: string;
  genre: string;
  description: string;
  authorId: string;
  pages: number;
  imageUrl: string;
  buyUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
