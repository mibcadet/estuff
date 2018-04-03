import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { AuthService } from '../../modules/authorization/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [AuthService]
})
export class AppMainComponent implements OnInit {
  @ViewChild(CategoriesComponent) categories;

  user: User;
  isLoading = false;
  categoriesFilter = '';
  isVisible = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
      this.isVisible = this.auth.canEdit(this.user);
    });
  }

  setIsLoading($event) {
    this.isLoading = $event;
  }

  recieveEvent($event) {
    this.categoriesFilter = $event;
  }
}
