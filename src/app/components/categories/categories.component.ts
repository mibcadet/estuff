import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/categories';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = afs.collection<Category>('categories');
    this.categories = this.categoriesCollection.valueChanges();
  }

  removeCategory(category: Category) {
    return this.categoriesCollection.doc(category.id).update({ disabled: true });
  }
}
