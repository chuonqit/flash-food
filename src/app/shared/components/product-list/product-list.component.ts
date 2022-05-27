import { ProductElement } from './../../models/Product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() title: string | null;
  @Input('data') products: ProductElement[];

  constructor(public _dialog: MatDialog) {
    this.products = [];
    this.title = null;
  }

  ngOnInit(): void {}

  openProductDialog(data: ProductElement) {
    return this._dialog.open(ProductDialogComponent, {
      width: '620px',
      data,
    });
  }
}
