import { PartialType } from '@nestjs/mapped-types';
import { CreateBybitDto } from './create-bybit.dto';

export class UpdateBybitDto extends PartialType(CreateBybitDto) {}
