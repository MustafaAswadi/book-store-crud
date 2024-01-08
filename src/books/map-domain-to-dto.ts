import { BookDomain } from './books.domain';
import { Book } from './dto/types';

export const MapDomainToDto = (domain: BookDomain): Book => {
  if (!domain) return null;

  return {
    id: domain.id,
    title: domain.title,
    genre: domain.genre,
    description: domain.description,
    authorId: domain.authorId,
    pages: domain.pages,
    imageUrl: domain.imageUrl,
    buyUrl: domain.buyUrl,
    createdAt: domain.createdAt,
    updatedAt: domain.updatedAt,
    deletedAt: domain?.deletedAt,
  };
};
