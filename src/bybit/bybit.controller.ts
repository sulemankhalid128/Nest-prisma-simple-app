import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BybitService } from './bybit.service';
import { CreateBybitDto } from './dto/create-bybit.dto';
import { UpdateBybitDto } from './dto/update-bybit.dto';

@Controller('bybit')
export class BybitController {
  constructor(private readonly bybitService: BybitService) {}

  @Post()
  create(@Body() createBybitDto: CreateBybitDto) {
    return this.bybitService.create(createBybitDto);
  }

  @Get()
  findAll() {
    return this.bybitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bybitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBybitDto: UpdateBybitDto) {
    return this.bybitService.update(+id, updateBybitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bybitService.remove(+id);
  }
}
