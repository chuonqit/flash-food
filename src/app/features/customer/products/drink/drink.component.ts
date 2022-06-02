import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { ProductElement } from 'src/app/shared/models/Product.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  ascii: string | null;
  products: ProductElement[];
  category: CategoryElement | null;
  isLoading: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitle: Title,
    private categoryService: CategoryService
  ) {
    this.products = [];
    this.category = null;
    this.ascii = this._activatedRoute.snapshot.paramMap.get('ascii');
    this.isLoading = true;
  }

  ngOnInit(): void {
    this._pageTitle.setTitle('Đồ uống');
    this.categoryService
      .getProductsCategoryType('do-uong')
      .subscribe((data) => {
        this.products = data.products;
        this.category = data.category;
        this.isLoading = false;
      });
  }
}
