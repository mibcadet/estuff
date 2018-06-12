import { Injectable } from '@angular/core';
import { DatabaseService } from '../modules/backend-api/services/database.service';

@Injectable()
export class CategoriesService {

  readonly COLLECTION_NAME = 'categories';

  constructor(private categoriesDb: DatabaseService) {}

  find(query?) {
    return this.categoriesDb.getItems(this.COLLECTION_NAME, query);
  }

  insert(category) {
    return this.categoriesDb.addItem(this.COLLECTION_NAME, category);
  }

  remove(id) {
    return this.categoriesDb.removeItem(this.COLLECTION_NAME, id);
  }
}
