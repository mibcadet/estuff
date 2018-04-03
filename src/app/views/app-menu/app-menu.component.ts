import { Component } from '@angular/core';
import { AuthService } from '../../modules/Authorization/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  providers: [ AuthService ]
})
export class AppMenuComponent {

  constructor(public auth: AuthService) {
  }

  login() {
    this.auth.googleLogin();
  }

  logout() {
    this.auth.signOut();
  }
}
