import { Component, Input, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../models/products';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  @Input() set categoriesFilter(filter) {
    this.category$.next(filter);
  }

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Product[];
  category$ = new Subject<string>();

  constructor(private afs: AngularFirestore) {
    const catObs = this.category$
      .switchMap(category => afs.collection('products', (productRef) => {
        if (category) return productRef.where('category', '==', category);
        else return productRef.orderBy('price', 'desc');
      }).valueChanges());

    catObs.subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  ngAfterViewInit() {
  }

  removeProduct(product: Product) {
    return this.productsCollection.doc(product.id).delete();
  }
}
