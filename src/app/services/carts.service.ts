import { Injectable } from '@angular/core';
import { AuthService } from '../modules/authorization/auth.service';
import { DatabaseService } from '../modules/backend-api/services/database.service';
import { Cart } from '../models/cart';
import { isEmpty } from 'lodash';

@Injectable()
export class CartsService {

  readonly COLLECTION_NAME = 'carts';

  constructor(private db: DatabaseService, private auth: AuthService) { }

  find(query?) {
    return this.db.getItems(this.COLLECTION_NAME, query);
  }

  addProduct(product) {
    return this.find({
      field: 'uid',
      'value': this.auth.getCurrentUserId()
    }).subscribe((carts: Cart[]) => {
      if (isEmpty(carts)) {
        return this.db.addItem(this.COLLECTION_NAME, new Cart(this.auth.getCurrentUserId(), [product]));
      }

      return carts.forEach((cart: Cart) => {
        cart.products.unshift(product);
        const updateQuery = {
          itemId: cart.id,
          changes: {
            products: cart.products
          }
        };
        return this.db.updateItem(this.COLLECTION_NAME, updateQuery);
      });
    });
  }
}
