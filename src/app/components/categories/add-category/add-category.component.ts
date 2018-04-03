import { Component } from '@angular/core';
import { Category } from '../../../models/categories';
import { DatabaseService, Query } from '../../../services/database.service';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [DatabaseService]
})
export class AddCategoryComponent {

  readonly COLLECTION = 'categories';
  categories: Category[] = [];
  category: Category = {
    id: '',
    name: '',
    disabled: false
  };

  constructor(private db: DatabaseService) {
    db.getItems(this.COLLECTION)
      .subscribe((categories: Category[]) => this.setCategories);
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  addCategory() {
    this.db.addItem(this.COLLECTION, this.category);
  }
}
