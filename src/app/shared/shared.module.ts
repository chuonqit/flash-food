import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';

@NgModule({
  declarations: [BreadcrumbComponent, ProductListComponent, NewsfeedComponent],
  imports: [RouterModule, CommonModule],
  exports: [BreadcrumbComponent, ProductListComponent, NewsfeedComponent],
})
export class SharedModule {}
