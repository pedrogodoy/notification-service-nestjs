import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string | undefined;

  @IsNotEmpty()
  @Length(5, 240)
  content: string | undefined;
  
  category: string | undefined;
}