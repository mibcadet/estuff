import { Injectable } from '@angular/core';
import { DatabaseService } from '../modules/backend-api/services/database.service';

@Injectable()
export class CategoriesService {

  readonly COLLECTION_NAME = 'categories';

  constructor(private db: DatabaseService) {}

  find(query?) {
    return this.db.getItems(this.COLLECTION_NAME, query);
  }

  insert(category) {
    return this.db.addItem(this.COLLECTION_NAME, category);
  }

  remove(id) {
    return this.db.removeItem(this.COLLECTION_NAME, id);
  }
}
