import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Category } from '../../models/categories';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../modules/Authorization/auth.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [DatabaseService, AuthService]
})

export class CategoriesComponent {
  @Output() selectCategoryEvent = new EventEmitter<string>();

  readonly COLLECTION = 'categories';
  selectedCategory: string;
  categories: Category[] = [];

  constructor(private db: DatabaseService, private auth: AuthService) {
    this.db.getItems(this.COLLECTION)
      .subscribe((categories: Category[]) => this.categories = categories);
  }

  selectCategory(categoryName) {
    this.selectCategoryEvent.emit(categoryName);
  }

  clearSelectedCategory() {
    this.selectedCategory = '';
    this.selectCategoryEvent.emit(this.selectedCategory);
  }

  remove(category) {
    this.db.removeItem(this.COLLECTION, category.id)
      .then(() => this.clearSelectedCategory());
  }
}
