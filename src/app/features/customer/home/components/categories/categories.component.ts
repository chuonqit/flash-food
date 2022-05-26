import { Component, Input } from '@angular/core';
import { HomeCategoryElement } from 'src/app/shared/models/Category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Input('title') categoryTitle: string | null;
  @Input('data') categories: HomeCategoryElement[];

  constructor() {
    this.categoryTitle = null;
    this.categories = [];
  }
}
