import { BookDomain } from '../books.domain';
import { BooksEntity } from './books.entity';

export const MapEntityToDomain = (entity: BooksEntity): BookDomain => {
  if (!entity) return null;

  return {
    id: entity.id,
    title: entity.title,
    description: entity.description,
    genre: entity.genre,
    pages: entity.pages,
    authorId: entity.authorId,
    buyUrl: entity.buyUrl,
    imageUrl: entity.imageUrl,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
    deletedAt: entity?.deletedAt,
  };
};
