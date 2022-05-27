import { Component, OnInit } from '@angular/core';
import { HomeCategoryElement } from 'src/app/shared/models/Category.model';
import { Title } from '@angular/platform-browser';
import {
  ProductElement,
  PRODUCT_DATA,
} from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: HomeCategoryElement[];
  products: ProductElement[];

  constructor(private _pageTitle: Title) {
    this._pageTitle.setTitle('Trang chủ');
    this.categories = [
      {
        id: 1,
        name: 'Bánh mì',
        nameAscii: 'banh-mi',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ ăn',
        parentAscii: 'do-an',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
      {
        id: 1,
        name: 'Cafe',
        nameAscii: 'cafe',
        image:
          'https://tea-3.lozi.vn/v1/images/resized/category-web-21-1590397610',
        parentName: 'Đồ uống',
        parentAscii: 'do-uong',
      },
    ];
    this.products = PRODUCT_DATA.slice(0, 12);
  }

  ngOnInit(): void {}
}
