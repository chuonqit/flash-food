import { CategoryService } from 'src/app/shared/services/category.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductElement } from 'src/app/shared/models/Product.model';
import { CategoryElement } from 'src/app/shared/models/Category.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  products: ProductElement[];
  category: CategoryElement | null;

  constructor(
    private _pageTitle: Title,
    private categoryService: CategoryService
  ) {
    this.products = [];
    this.category = null;
  }

  ngOnInit(): void {
    this._pageTitle.setTitle('Đồ ăn');
    this.categoryService.getProductsCategoryType('do-an').subscribe((data) => {
      this.products = data.products;
      this.category = data.category;
    });
  }
}
