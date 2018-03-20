import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product, ProductType } from '../models/products';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  removeProduct(product: Product) {
    return this.productsCollection.doc(product.id).delete();
  }
}
