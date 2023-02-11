import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { ProductsRepository } from "src/application/repositories/products-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";
import { PrismaProductsRepository } from "./prisma/repositories/prisma-products-repository";

@Module({
  providers: [PrismaService, 
  {
    provide: NotificationsRepository,
    useClass: PrismaNotificationsRepository,
  },
  {
    provide: ProductsRepository,
    useClass: PrismaProductsRepository,
  }
],
  exports: [NotificationsRepository, ProductsRepository]
})
export class DatabaseModule {}