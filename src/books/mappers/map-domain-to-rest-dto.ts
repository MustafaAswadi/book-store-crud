import { BookDomain } from '../books.domain';
import { BookDto } from '../dto/rest/types';

export const MapDomainToRestDto = (domain: BookDomain): BookDto => {
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
  };
};
