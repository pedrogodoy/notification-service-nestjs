import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface GetNotificationsResponse {
  notification: Notification;
}

@Injectable()
export class GetNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  // async execute() {
  //   return await this.notificationsRepository.list();
  // }
}