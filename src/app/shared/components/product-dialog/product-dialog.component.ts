import { ProductElement } from './../../models/Product.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  quantity: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductElement) {
    this.quantity = 1;
  }

  ngOnInit(): void {}

  increase() {
    this.quantity += 1;
  }

  decrease() {
    this.quantity -= 1;
    if (this.quantity <= 1) {
      this.quantity = 1;
    }
  }

  handleAddCart(note: string) {
    console.log({
      data: this.data,
      quantity: this.quantity,
      note: note,
      total: this.data.price * this.quantity,
    });
  }
}
