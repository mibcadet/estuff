import { AuthService } from '../../modules/authorization/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { Query } from '../../models/query';
import { Subject } from 'rxjs/Subject';
import { User } from '../../models/user';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [AuthService, ProductsService, CartsService]
})

export class ProductsComponent implements OnInit {
  @Input() set categoriesFilter(filter) {
    this.isLoading = true;
    this.category$.next(filter);
  }

  category$ = new Subject<string>();
  user: User;
  products: Product[] = [];
  isLoading = false;
  defaultImage = 'https://i.imgur.com/ICQ6ESp.png'; // to be removed from here

  constructor(private auth: AuthService, private db: ProductsService, private cartsService: CartsService) {

    this.db.find({ field: 'category', value: this.category$})
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

  addToCart(product) {
    this.cartsService.addProduct(product);
  }

  removeProduct(product) {
    this.db.remove(product.id);
  }
}
