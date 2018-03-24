import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Category } from '../../models/categories';


@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  private categoriesCollection: AngularFirestoreCollection<Category>;
  category: Category = {
    name: '',
    disabled: false
  };

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = afs.collection<Category>('categories');
  }


  addCategory() {
    this.category.id = this.afs.createId();
    this.categoriesCollection.add(this.category);
  }
}
