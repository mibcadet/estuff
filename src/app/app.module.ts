import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AuthModule } from './modules/Authorization/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { firebase } from '../environments/firebase.conf';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './views/app-menu/app-menu.component';
import { AppFooterComponent } from './views/app-footer/app-footer.component';
import { AppHeaderComponent } from './views/app-header/app-header.component';
import { AppMainComponent } from './views/app-main/app-main.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMainComponent,
    CategoriesComponent,
    ProductsComponent,
    AddProductComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
