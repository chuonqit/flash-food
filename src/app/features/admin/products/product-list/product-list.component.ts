import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/Paginator.model';
import { ProductElement } from 'src/app/shared/models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: ProductElement[];
  currentPage: number;
  pageSize: number;
  paginator!: Paginator;

  constructor(private productService: ProductService) {
    this.dataSource = [];
    this.displayedColumns = ['index', 'name', 'price', 'category', 'action'];
    this.currentPage = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
    this.productService
      .getProductsWithPaginator(this.currentPage, this.pageSize)
      .subscribe((products) => {
        this.dataSource = products.data;
        this.paginator = products.paginator;
      });
  }
}
