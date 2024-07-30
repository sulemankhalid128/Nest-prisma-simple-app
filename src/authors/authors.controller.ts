import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: Prisma.AuthorCreateInput) {
    return this.authorsService.create(createAuthorDto);
  }

 
  @Get()
  async getAuthorsWithBooks(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    return this.authorsService.fetchAuthorsWithBooks(page, pageSize);
  }

  @Get('books')
  async getBooksByAuthor(@Query('authorId') authorId: number) {
    return this.authorsService.fetchBooksByAuthor(authorId);
  }
}
