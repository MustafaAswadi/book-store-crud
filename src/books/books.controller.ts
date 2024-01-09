import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './dto/rest/input';
import { MapDomainToRestDto } from './mappers/map-domain-to-rest-dto';
import { BookDto } from './dto/rest/types';

@Controller('books')
export class AppController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async findAll(): Promise<BookDto[]> {
    const res = await this.bookService.getAll();
    return res.map(MapDomainToRestDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BookDto> {
    const res = await this.bookService.getOneById(id);
    return MapDomainToRestDto(res);
  }

  @Post()
  async create(@Body() book: CreateBookDto): Promise<BookDto> {
    const res = await this.bookService.create(book);
    return MapDomainToRestDto(res);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<boolean> {
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.bookService.delete(id);
  }
}
