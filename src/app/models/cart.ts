import { User } from './user';
import { Product } from './products';

export interface Container {
  id: string;
  ownerId: string;
  products: Product[];
}

export class Cart implements Container {
  id: string;
  ownerId: string;
  products: Product[];

  constructor(ownerId: string, products?: Product[]) {}

  getTotalPrice() {
    return this.products.reduce((sum, product) => {
      return sum += product.price;
    }, 0);
  }
}
