import { Platform } from './platforms';

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  key?: string;
  platform?: Platform;
}
