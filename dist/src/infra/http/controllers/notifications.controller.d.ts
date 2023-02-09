import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { GetNotifications } from 'src/application/use-cases/get-notifications';
export declare class NotificationsController {
    private sendNotification;
    private getNotification;
    constructor(sendNotification: SendNotification, getNotification: GetNotifications);
    create(body: CreateNotificationBody): Promise<{
        notification: import("../../../application/entities/notification").Notification;
    }>;
}
