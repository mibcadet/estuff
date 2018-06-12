import { Injectable } from '@angular/core';
import { DatabaseService } from '../modules/backend-api/services/database.service';

@Injectable()
export class ProductsService {

  readonly COLLECTION_NAME = 'products';

  constructor(private productsDb: DatabaseService) {}

  find(query) {
    return this.productsDb.getItems(this.COLLECTION_NAME, query);
  }

  insert(product) {
    return this.productsDb.addItem(this.COLLECTION_NAME, product);
  }

  remove(id) {
    return this.productsDb.removeItem(this.COLLECTION_NAME, id);
  }
}
