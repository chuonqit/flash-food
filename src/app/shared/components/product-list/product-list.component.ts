import { ProductElement } from './../../models/Product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() title: string | null;
  @Input('data') products: ProductElement[];

  constructor() {
    this.products = [];
    this.title = null;
  }

  ngOnInit(): void {}
}
