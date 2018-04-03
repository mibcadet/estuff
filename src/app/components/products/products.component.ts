import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../models/products';
import { DatabaseService, Query } from '../../services/database.service';
import { AuthService } from '../../modules/authorization/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DatabaseService, AuthService]
})

export class ProductsComponent implements OnInit {
  @Input() set categoriesFilter(filter) {
    this.isLoading = true;
    this.category$.next(filter);
  }

  category$ = new Subject<string>();
  readonly COLLECTION = 'products';
  readonly QUERY = new Query('category', this.category$);
  user: User;
  products: Product[] = [];
  isLoading = false;
  defaultImage = 'https://i.imgur.com/ICQ6ESp.png';

  constructor(private db: DatabaseService, private auth: AuthService) {
    this.db.getItems(this.COLLECTION, this.QUERY)
      .subscribe((products: Product[]) => {
        this.products = products;
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  canEdit() {
    return this.auth.canEdit(this.user);
  }

  removeProduct(product) {
    this.db.removeItem(this.COLLECTION, product.id);
  }
}
