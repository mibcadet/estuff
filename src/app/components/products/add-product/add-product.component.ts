import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product, ProductType } from '../../models/products';
import { Category } from '../../models/categories';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  product: Product = {
    name: '',
    price: 0
  }
  typeNames: string[] = Object.keys(ProductType).map(key => ProductType[key]).filter(value => typeof value === 'string') as string[];
  categories: Observable<Category[]>;

  private productsCollection: AngularFirestoreCollection<Product>;
  private categoriesCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    this.categoriesCollection = afs.collection<Category>('categories');
    this.categories = this.categoriesCollection.valueChanges();
  }

  addProduct() {
    return this.productsCollection.add(this.product)
      .then(addedProduct => {
        return addedProduct.update({ id: addedProduct.id });
      });
  }
}
