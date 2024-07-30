import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({ data: createAuthorDto });
  }

  async fetchAuthorsWithBooks(page: number, pageSize: number) {
    const authors = await this.prisma.author.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        name: true,
        books: {
          select: {
            id: true,
            title: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return authors;
  }

  async fetchAuthors(page: number, pageSize: number) {
    return this.prisma.author.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        name: true,
        age:true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async fetchBooksByAuthor(authorId: number) {
    return this.prisma.books.findMany({
      where: { authorId },
      select: {
        id: true,
        title: true,
      },
    });
  }

}
