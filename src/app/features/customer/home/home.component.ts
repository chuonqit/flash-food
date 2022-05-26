import { Component, OnInit } from '@angular/core';
import { HomeCategoryElement } from 'src/app/shared/models/Category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: HomeCategoryElement[];

  constructor() {
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
  }

  ngOnInit(): void {}
}
