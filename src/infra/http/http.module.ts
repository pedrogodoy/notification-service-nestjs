import { Module } from '@nestjs/common';
import { GetExternalProducts } from 'src/application/use-cases/get-external-products';
import { GetNotifications } from 'src/application/use-cases/get-notifications';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController, ProductsController],
  providers: [SendNotification, GetNotifications, GetExternalProducts],
})
export class HttpModule {}