import { Injectable } from '@nestjs/common';
import { CreateBybitDto } from './dto/create-bybit.dto';
import { UpdateBybitDto } from './dto/update-bybit.dto';

@Injectable()
export class BybitService {
  create(createBybitDto: CreateBybitDto) {
    return 'This action adds a new bybit';
  }

  findAll() {
    return `This action returns all bybit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bybit`;
  }

  update(id: number, updateBybitDto: UpdateBybitDto) {
    return `This action updates a #${id} bybit`;
  }

  remove(id: number) {
    return `This action removes a #${id} bybit`;
  }
}
