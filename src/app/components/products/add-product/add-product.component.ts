import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { Category } from '../../../models/categories';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [ DatabaseService ]
})
export class AddProductComponent {

  readonly CATEGORIES_COLLECTION = 'categories';
  readonly PRODUCTS_COLLECTION = 'products';
  product: Product = {
    id: '',
    name: '',
    price: 0,
    image: ''
  };
  categories: Category[] = [];

  constructor(private db: DatabaseService) {
    db.getItems(this.CATEGORIES_COLLECTION)
      .subscribe((categories: Category[]) => this.setCategories(categories));
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  addProduct() {
    this.db.addItem(this.PRODUCTS_COLLECTION, this.product);
  }
}
