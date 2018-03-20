import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
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
    return this.categoriesCollection.add(this.category)
      .then(addedCategory => {
        return addedCategory.update({ id: addedCategory.id });
      });
  }
}
