import { CategoryElement } from 'src/app/shared/models/Category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/Paginator.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: CategoryElement[];
  currentPage: string | number;
  pageSize: string | number;
  paginator!: Paginator;
  nextPage: number | null;
  previousPage: number | null;
  totalPage: number | null;
  searchForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.dataSource = [];
    this.displayedColumns = ['image', 'name', 'type', 'action'];
    this.currentPage = 1;
    this.pageSize = 5;
    this.nextPage = null;
    this.previousPage = null;
    this.totalPage = null;
    this.searchForm = new FormGroup({
      keyword: new FormControl('', []),
      filter_by: new FormControl('', []),
    });
  }

  handleDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((ok) => {
      if (ok) {
        this.categoryService.deleteCategory(id).subscribe(() => {
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
    this.categoryService
      .getCategoriesWithPaginator(
        this.currentPage,
        this.pageSize,
        this.searchForm.get('keyword')?.value,
        this.searchForm.get('filter_by')?.value
      )
      .subscribe((category) => {
        this.dataSource = category.data;
        this.paginator = category.paginator;
        this.nextPage = category.paginator.nextPage;
        this.previousPage = category.paginator.prevPage;
        this.totalPage = category.paginator.totalPages;
      });
  }

  onSubmit() {
    if (!this.searchForm.invalid) {
      this.currentPage = 1;
      this.getData();
    }
  }
}
