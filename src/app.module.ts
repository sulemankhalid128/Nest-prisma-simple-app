import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { BybitModule } from './bybit/bybit.module';

@Module({
  imports: [BooksModule, AuthorsModule, BybitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
