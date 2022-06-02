import { ActivatedRoute, Router } from '@angular/router';
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
  currentPage: string | number;
  pageSize: string | number;
  paginator!: Paginator;
  nextPage: number | null;
  previousPage: number | null;
  totalPage: number | null;

  constructor(private productService: ProductService) {
    this.dataSource = [];
    this.displayedColumns = [
      'image',
      'name',
      'type',
      'price',
      'category',
      'action',
    ];
    this.currentPage = 1;
    this.pageSize = 5;
    this.nextPage = null;
    this.previousPage = null;
    this.totalPage = null;
  }

  handlePreviousPage() {
    this.currentPage = Number(this.previousPage);
    this.getData();
  }
  handleNextPage() {
    this.currentPage = Number(this.nextPage);
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productService
      .getProductsWithPaginator(this.currentPage, this.pageSize)
      .subscribe((products) => {
        this.dataSource = products.data;
        this.paginator = products.paginator;
        this.nextPage = products.paginator.nextPage;
        this.previousPage = products.paginator.prevPage;
        this.totalPage = products.paginator.totalPages;
      });
  }
}
