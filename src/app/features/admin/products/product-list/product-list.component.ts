import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
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
    this.pageSize = 1;
    this.nextPage = null;
    this.previousPage = null;
    this.totalPage = null;
  }

  handleDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((ok) => {
      if (ok) {
        this.productService.deleteProducts(id).subscribe(() => {
          this.getData();
          this._snackBar.open('Xóa thành thành công', '', {
            duration: 5000,
          });
        });
      }
    });
  }

  handlePreviousPage() {
    this.currentPage = Number(this.previousPage);
    this._router.navigate([], {
      queryParams: {
        page: this.currentPage,
      },
    });
    this.getData();
  }
  handleNextPage() {
    this.currentPage = Number(this.nextPage);
    this._router.navigate([], {
      queryParams: {
        page: this.currentPage,
      },
    });
    this.getData();
  }

  ngOnInit(): void {
    this.currentPage = this._activatedRoute.snapshot.queryParams['page'];
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
