import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from '../../../app.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { GetNotifications } from 'src/application/use-cases/get-notifications';
import { GetExternalProducts } from 'src/application/use-cases/get-external-products';
import { CreateProductBody } from '../dtos/create-product-body';

@Controller('products')
export class ProductsController {
  constructor(
    private sendNotification: SendNotification,
    private getNotification: GetNotifications,
    private getExternalProducts: GetExternalProducts
  ) {}
  
  @Post()
  async create(@Body() body: CreateProductBody) {
    console.log(body);
    // const { recipientId, content, category } = body;

    const { product } = await this.getExternalProducts.execute({
      name: "Teste",
      price: "1212",
      product_id: "1212",
      product_to_category: [],
      sku: "12121"
    });

    return { product };
  }

  // @Get()
  // async list() {
  //   return await this.getNotification.execute();
  // }
}
