import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateProductBody {
  @IsNotEmpty()
  name: string;

  // @IsNotEmpty()
  // @Length(5, 240)
  // content: string | undefined;
  
  // category: string | undefined;
}