import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksEntity } from './datastore/books.entity';
import { Repository } from 'typeorm';
import { MapEntityToDomain } from './datastore/entity-to-domain.mapper';
import { BookDomain } from './books.domain';
import { CreateBookInput, UpdateBookInput } from './dto/graphql/inputs';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity)
    private readonly booksRepository: Repository<BooksEntity>,
  ) {}

  async getAll(): Promise<BookDomain[]> {
    const books = await this.booksRepository.find();
    return books.map(MapEntityToDomain);
  }

  async getOneById(id: string): Promise<BookDomain> {
    const book = await this.booksRepository.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return MapEntityToDomain(book);
  }

  async create(book: CreateBookInput): Promise<BookDomain> {
    const bookToCreate = {
      title: book.title,
      genre: book.genre,
      description: book.description,
      authorId: book.authorId,
      pages: book.pages,
      imageUrl: book.imageUrl,
      buyUrl: book.buyUrl,
    };
    const res = await this.booksRepository.save(bookToCreate);

    return MapEntityToDomain(res);
  }

  async update(id: string, book: UpdateBookInput): Promise<boolean> {
    const bookToUpdate = await this.getOneById(id);
    const updatedBook = await this.booksRepository.update(bookToUpdate, book);
    return updatedBook.affected > 0;
  }

  async delete(id: string): Promise<boolean> {
    const res = await this.booksRepository.softDelete(id);
    return res.affected > 0;
  }
}
