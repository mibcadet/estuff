import { Injectable } from '@angular/core';
import { DatabaseService } from '../modules/backend-api/services/database.service';

@Injectable()
export class ProductsService {

  readonly COLLECTION_NAME = 'products';

  constructor(private db: DatabaseService) {}

  find(query) {
    return this.db.getItems(this.COLLECTION_NAME, query);
  }

  insert(product) {
    return this.db.addItem(this.COLLECTION_NAME, product);
  }

  remove(id) {
    return this.db.removeItem(this.COLLECTION_NAME, id);
  }
}
