import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { CategoriesComponent } from "../components/categories/categories.component";

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements AfterViewInit {
  @ViewChild(CategoriesComponent) categories;

  categoriesFilter: string = '';

  constructor() { }

  ngAfterViewInit() {
  }

  recieveEvent($event) {
    console.log('event', $event);
    this.categoriesFilter = $event;
  }
}
