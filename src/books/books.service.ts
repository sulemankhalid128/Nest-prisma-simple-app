import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: Prisma.BooksCreateInput) {
    return this.prisma.books.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({ where: id });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where,
    });
  }
}
