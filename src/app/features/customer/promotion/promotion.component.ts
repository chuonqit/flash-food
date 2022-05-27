import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {
  ProductElement,
  PRODUCT_DATA,
} from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  products: ProductElement[];

  constructor(private _pageTitle: Title) {
    this.products = PRODUCT_DATA;
  }

  ngOnInit(): void {
    this._pageTitle.setTitle('Khuyến mãi');
  }
}
