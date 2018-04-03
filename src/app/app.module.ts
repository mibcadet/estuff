import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AuthModule } from './modules/authorization/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackendApiModule } from './modules/backend-api/backend-api.module';

import { environment } from '../environments/environment';

import { StylesModule } from './modules/styles/styles.module';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './views/menu/menu.component';
import { AppFooterComponent } from './views/footer/footer.component';
import { AppHeaderComponent } from './views/header/header.component';
import { AppMainComponent } from './views/main/main.component';
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
    StylesModule,
    BackendApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
