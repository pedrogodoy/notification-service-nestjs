import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from '../../../app.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { GetNotifications } from 'src/application/use-cases/get-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private getNotification: GetNotifications
  ) {}
  
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      recipientId,
      category
    });

    return { notification };
  }

  // @Get()
  // async list() {
  //   return await this.getNotification.execute();
  // }
}
