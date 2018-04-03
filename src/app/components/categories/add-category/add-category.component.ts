import { Component } from '@angular/core';
import { Category } from '../../../models/categories';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [CategoriesService]
})
export class AddCategoryComponent {

  category: Category = {
    id: '',
    name: '',
    disabled: false
  };

  constructor(private db: CategoriesService) {}

  addCategory() {
    this.db.insert(this.category);
  }
}
