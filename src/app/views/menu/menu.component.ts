import { Component } from '@angular/core';
import { AuthService } from '../../modules/authorization/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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
