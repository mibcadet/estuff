import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { AuthService } from '../../modules/authorization/auth.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [AuthService, CategoriesService]
})

export class CategoriesComponent {
  @Output() selectCategoryEvent = new EventEmitter<string>();

  readonly COLLECTION = 'categories';
  selectedCategory: string;
  categories: Category[] = [];

  constructor(private auth: AuthService, private db: CategoriesService) {
    this.db.find()
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
    this.db.remove(category.id)
      .then(() => this.clearSelectedCategory());
  }
}
