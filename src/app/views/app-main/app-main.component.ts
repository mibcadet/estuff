import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { AuthService } from '../../modules/Authorization/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
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
