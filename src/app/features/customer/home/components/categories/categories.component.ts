import { Component, Input } from '@angular/core';
import { HomeCategoryElement } from 'src/app/shared/models/Category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Input('data') categories: HomeCategoryElement[];

  constructor() {
    this.categories = [];
  }
}
