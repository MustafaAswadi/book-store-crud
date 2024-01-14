import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorDomain } from '../authors.domain';

@Entity('authors')
export class AuthorEntity implements AuthorDomain {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDate: Date;
}
