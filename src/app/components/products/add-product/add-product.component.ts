import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { Category } from '../../../models/categories';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [CategoriesService, ProductsService]
})
export class AddProductComponent {

  product: Product = {
    id: '',
    name: '',
    price: 0,
    image: ''
  };
  categories: Category[] = [];

  constructor(private categoriesDb: CategoriesService, private productsDb: ProductsService) {
    this.categoriesDb.find()
      .subscribe((categories: Category[]) => this.setCategories(categories));
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  addProduct() {
    this.productsDb.insert(this.product);
  }
}
