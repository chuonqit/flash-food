import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {
  ProductElement,
  PRODUCT_DATA,
} from 'src/app/shared/models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  products: ProductElement[];
  isLoading: boolean;

  constructor(
    private _pageTitle: Title,
    private productService: ProductService
  ) {
    this.products = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.productService.getProductsPromotion().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
    this._pageTitle.setTitle('Khuyến mãi');
  }
}
