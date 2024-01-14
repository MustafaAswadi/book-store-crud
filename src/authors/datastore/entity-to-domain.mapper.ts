import { AuthorDomain } from '../authors.domain';
import { AuthorEntity } from './authors.entity';

export const MapEntityToDomain = (entity: AuthorEntity): AuthorDomain => {
  if (!entity) return null;

  return {
    id: entity.id,
    name: entity.name,
    email: entity.email,
    birthDate: entity.birthDate,
  };
};
