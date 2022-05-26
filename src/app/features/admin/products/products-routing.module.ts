import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: {
          breadcrumbs: [
            { label: 'Trang chủ', url: '/admin' },
            { label: 'Danh sách sản phẩm' },
          ],
        },
      },
      {
        path: 'new',
        component: ProductNewComponent,
        data: {
          breadcrumbs: [
            { label: 'Trang chủ', url: '/admin' },
            { label: 'Danh sách sản phẩm', url: '/admin/products' },
            { label: 'Thêm sản phẩm mới' },
          ],
        },
      },
      {
        path: ':id/update',
        component: ProductUpdateComponent,
        data: {
          breadcrumbs: [
            { label: 'Trang chủ', url: '/admin' },
            { label: 'Danh sách sản phẩm', url: '/admin/products' },
            { label: 'Cập nhật sản phẩm' },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
