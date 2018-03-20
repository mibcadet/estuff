import { Platform } from './platforms';
import { Category } from './categories';

export interface Product {
  id?: string;
  name: string;
  price: Number;
  image?: string;
  description?: string;
  category?: Category;
  key?: string;
  platform?: Platform;
}

export enum ProductType { Key, Item, Service }
