import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { ERROR_MAP } from 'dictionary';
import { OrderType } from 'src/order/entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id === 'type') return OrderType;
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_ORDER_ID'), 201);
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_ORDER_ID'), 201);
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_ORDER_ID'), 201);
    return this.orderService.remove(+id);
  }
}
