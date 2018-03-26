import { Component, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../models/products';
import { DatabaseService, dbFilter } from '../../services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DatabaseService]
})

export class ProductsComponent {
  @Input() set categoriesFilter(filter) {
    this.category$.next(filter);
  }

  category$ = new Subject<string>();
  products: Product[] = [];
  readonly COLLECTION = 'products';
  readonly QUERY = {
    field: 'category',
    value: this.category$
  }

  constructor(private db: DatabaseService) {
    this.db.getItems(this.COLLECTION, this.QUERY)
      .subscribe((products: Product[]) => this.setProducts);
  }

  private setProducts(products: Product[]) {
    this.products = products;
  }

  removeProduct(product: Product) {
  }
}
