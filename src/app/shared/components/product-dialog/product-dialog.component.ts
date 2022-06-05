import { FormGroup, FormControl } from '@angular/forms';
import { AttributeElement } from './../../models/Attribute.model';
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
  priceTotal: number;
  otherForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductElement) {
    this.quantity = 1;
    this.priceTotal = data.price;
    this.otherForm = new FormGroup({
      size: new FormControl('', []),
      ice: new FormControl('', []),
      topping: new FormControl('', []),
      sugar: new FormControl('', []),
    });
  }

  selectSize(size: AttributeElement) {
    console.log(this.data.attributes.size.find((x) => (x._id = size._id)));
  }

  ngOnInit(): void {}

  increase() {
    this.quantity += 1;
    this.priceTotal = this.data.price * this.quantity;
  }

  decrease() {
    this.quantity -= 1;
    if (this.quantity <= 1) {
      this.quantity = 1;
    }
    this.priceTotal = this.data.price * this.quantity;
  }

  inputChange(quantity: string) {
    this.quantity = parseInt(quantity);
    this.priceTotal = quantity ? this.data.price * this.quantity : 0;
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
