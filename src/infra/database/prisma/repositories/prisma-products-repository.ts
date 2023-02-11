import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { Product } from "src/application/entities/product";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { ProductsRepository } from "src/application/repositories/products-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(product: Product): Promise<void> {
    await this.prismaService.product.create({
      data: {
        id: "121",
        name: "Pedro",
        price: "1212",
        sku: "testee"
      },
    });
  }

  // async list(): Promise<Notification[]> {
  //   return await this.prismaService.notification.findMany();
  // }
  
}