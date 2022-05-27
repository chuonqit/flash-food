import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, Subject } from 'rxjs';
import { ProductDialogComponent } from 'src/app/shared/components/product-dialog/product-dialog.component';
import {
  ProductElement,
  PRODUCT_DATA,
} from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-banner',
  template: `
    <div class="home-top">
      <section
        *ngIf="bannerImage"
        class="top-banner"
        [class.position]="textAlign"
        [class.center]="textAlign === 'center'"
        [class.right]="textAlign === 'right'"
        [class.left]="textAlign === 'left'"
        style="background-image: url({{ bannerImage }});"
        [title]="bannerTitleHighlight + ' ' + bannerTitle"
      >
        <h1 *ngIf="bannerTitle">
          <span
            class="top-banner--title__highlight"
            *ngIf="bannerTitleHighlight"
          >
            {{ bannerTitleHighlight }}
          </span>
          <span class="top-banner--title">
            {{ bannerTitle }}
          </span>
        </h1>
      </section>
      <div class="search" title="Tìm kiếm đồ ăn, nước uống...">
        <div class="form" [class.result]="isSearch">
          <mat-icon *ngIf="!isSearch">search</mat-icon>
          <mat-icon
            *ngIf="isSearch"
            style="cursor: pointer;"
            (click)="clearSearch(inputSearch)"
          >
            close
          </mat-icon>
          <input
            placeholder="Tìm kiếm đồ ăn, nước uống..."
            #inputSearch
            (keyup)="onKeyUp(inputSearch.value)"
            autocomplete="off"
          />
          <div class="result-search" *ngIf="searchResult.length > 0">
            <mat-list>
              <mat-list-item
                *ngFor="let product of searchResult"
                (click)="openProductDialog(product)"
                [title]="product.name"
              >
                <div class="box-image">
                  <div
                    class="list-image"
                    style="background-image: url('{{ product.image }}')"
                  ></div>
                </div>
                <span>{{ product.name }}</span>
              </mat-list-item>
            </mat-list>
          </div>
          <div
            class="result-search"
            *ngIf="isSearch && searchResult.length === 0"
          >
            <div class="search-not-found">Không tìm thấy kết quả</div>
          </div>
          <div class="result-search" *ngIf="isLoading">
            <div class="search-not-found">Đang tìm kiếm...</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  private subject: Subject<string> = new Subject();

  @Input('image') bannerImage: string | null;
  @Input('title') bannerTitle: string | null;
  @Input('title-highlight') bannerTitleHighlight: string | null;
  @Input('align') textAlign: 'center' | 'left' | 'right' | null;

  searchResult: ProductElement[];
  isSearch: boolean;
  isLoading: boolean;

  constructor(public _dialog: MatDialog) {
    this.bannerTitle = null;
    this.bannerImage = null;
    this.bannerTitleHighlight = null;
    this.textAlign = null;
    this.searchResult = [];
    this.isSearch = false;
    this.isLoading = false;
  }

  ngOnInit() {
    this.subject.pipe(debounceTime(500)).subscribe((searchTextValue) => {
      this.handleSearchChange(searchTextValue);
    });
  }

  openProductDialog(data: ProductElement) {
    return this._dialog.open(ProductDialogComponent, {
      width: '620px',
      data,
    });
  }

  onKeyUp(value: string) {
    if (value.trim()) {
      this.isLoading = true;
      return this.subject.next(value);
    }
    this.isSearch = false;
    this.searchResult = [];
  }

  handleSearchChange(value: string) {
    const result = PRODUCT_DATA.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    )
      .slice(0, 5)
      .sort((a, b) => b.price - a.price);
    this.isSearch = true;
    this.isLoading = false;
    this.searchResult = [...result];
  }

  clearSearch(elem: HTMLInputElement) {
    setTimeout(() => {
      elem.value = '';
      this.isSearch = false;
      this.searchResult = [];
    }, 50);
  }
}
