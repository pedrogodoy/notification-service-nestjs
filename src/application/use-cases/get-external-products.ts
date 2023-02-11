import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { Product } from "../entities/product";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { ProductsRepository } from "../repositories/products-repository";

interface GetExternalProductsRequest {
  name: string,
  price: string,
  product_id: string,
  product_to_category: any[],
  sku: string
}

interface GetExternalProductResponse {
  product: Product;
}

@Injectable()
export class GetExternalProducts {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(request: GetExternalProductsRequest): Promise<GetExternalProductResponse> {
    // const { recipientId, content, category } = request;

    const product = new Product({
      name: "Produto de teste",
      price: "122",
      product_id: "12313",
      product_to_category: [],
      sku: "teste"
    });

    await this.productsRepository.create(product);

    return {
      product
    };
  }
}