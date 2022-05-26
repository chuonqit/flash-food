import { ProductElement } from './../../../shared/models/Product.model';
import { Component, OnInit } from '@angular/core';
import { HomeCategoryElement } from 'src/app/shared/models/Category.model';
import { Title } from '@angular/platform-browser';

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
    this.products = [
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
      {
        id: 1,
        name: 'Product',
        image:
          'https://tea-3.lozi.vn/v1/ship/resized/banh-trang-huyen-linh-huyen-thanh-tri-ha-noi-1646756142992639856-banh-trang-tron-1646756465?w=200&type=o',
        price: 21000,
      },
    ];
  }

  ngOnInit(): void {}
}
