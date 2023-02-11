import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface ProductsProps {
  product_id: string;
  name: string;
  price: string;
  sku: string;
  product_to_category: any[];
}

export class Product {
  private _id: string;
  private props: ProductsProps;

  constructor(props: ProductsProps) {
    this._id = randomUUID();
    this.props = {
      ...props,
    };
  }

  public set product_id(product_id: string) {
    this.props.product_id = product_id;
  }

  public get product_id(): string {
    return this.props.product_id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set price(price: string) {
    this.props.price = price;
  }

  public get price(): string {
    return this.props.price;
  }

  public set sku(sku: string) {
    this.props.sku = sku;
  }

  public get sku(): string {
    return this.props.sku;
  }

  public set product_to_category(product_to_category: any[]) {
    this.props.product_to_category = product_to_category;
  }

  public get product_to_category(): any[] {
    return this.props.product_to_category;
  }

  public get id(): string {
    return this._id;
  }
}