import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  ProductElement,
  PRODUCT_DATA,
} from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  childrenAscii: string | null;
  products: ProductElement[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitle: Title
  ) {
    this.childrenAscii =
      this._activatedRoute.snapshot.paramMap.get('childrenAscii');
    this.products = PRODUCT_DATA;
  }

  ngOnInit(): void {
    let pageTitle = 'Đồ ăn ';
    if (this.childrenAscii) {
      pageTitle += this.childrenAscii;
    }
    this._pageTitle.setTitle(pageTitle);
  }
}
