import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  productId: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}
}
