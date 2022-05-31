import { ProductService } from 'src/app/shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { Title } from '@angular/platform-browser';
import { ProductElement } from 'src/app/shared/models/Product.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: CategoryElement[];
  products: ProductElement[];

  constructor(
    private _pageTitle: Title,
    private productService: ProductService,
    private cateogryService: CategoryService
  ) {
    this.categories = [];
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.cateogryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    this._pageTitle.setTitle('Trang chủ');
  }
}
