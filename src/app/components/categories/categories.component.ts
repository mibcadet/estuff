import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Output() selectCategoryEvent = new EventEmitter<string>();

  private categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  selectedCategory: string;

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = afs.collection<Category>('categories');
    this.categories = this.categoriesCollection.valueChanges();
  }

  removeCategory(category: Category) {
    return this.categoriesCollection.doc(category.id).update({ disabled: true });
  }

  selectCategory(categoryName) {
    this.selectCategoryEvent.emit(categoryName);
  }

  clearSelectedCategory() {
    this.selectedCategory = '';
    this.selectCategoryEvent.emit(this.selectedCategory);
  }
}
