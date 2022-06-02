import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { ProductElement } from 'src/app/shared/models/Product.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-food-more',
  templateUrl: './food-more.component.html',
  styleUrls: ['./food-more.component.scss'],
})
export class FoodMoreComponent implements OnInit {
  ascii: string | null;
  products: ProductElement[];
  title: string | null;
  isLoading: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitle: Title,
    private categoryService: CategoryService
  ) {
    this.products = [];
    this.title = null;
    this.ascii = null;
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.ascii = this._activatedRoute.snapshot.paramMap.get('ascii');
    this.categoryService
      .getProductsCategoryAscii(this.ascii)
      .subscribe((data) => {
        this.products = data.products;
        this.title = data.category.name;
        this._pageTitle.setTitle(data.category.name);
        this.isLoading = false;
      });
  }
}
