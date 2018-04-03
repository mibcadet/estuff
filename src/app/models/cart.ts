import { Product } from './products';

export interface Cart {
  cid: string;
  uid: string;
  products: Product[];
}
