import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { MaterialModule } from '../materials/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    ProductListComponent,
    NewsfeedComponent,
    ProductDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [RouterModule, CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    BreadcrumbComponent,
    ProductListComponent,
    NewsfeedComponent,
    ProductDialogComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
