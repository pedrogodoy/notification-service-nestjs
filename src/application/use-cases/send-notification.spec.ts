import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notificationsRepository = {
  async create(notification: Notification) {
  }
}

describe('Sen notification', () => {
  // it('should be able to send a notification', async () => {
  //   const sendNotification = new SendNotification(notificationsRepository);

  //   const { notification } = await sendNotification.execute({
  //     category: 'social',
  //     content: 'this is a notification',
  //     recipientId: 'example recipient id'
  //   });

  //   expect(notification).toBeTruthy();
  // });
});