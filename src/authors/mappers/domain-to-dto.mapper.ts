import { AuthorDomain } from '../authors.domain';
import { Author } from '../dto/graphql/types';

export const MapDomainToDto = (domain: AuthorDomain): Author => {
  if (!domain) return null;

  return {
    id: domain.id,
    name: domain.name,
    email: domain.email,
    birthDate: domain.birthDate,
  };
};
