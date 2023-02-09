import { Module } from '@nestjs/common';
import { GetNotifications } from 'src/application/use-cases/get-notifications';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, GetNotifications],
})
export class HttpModule {}