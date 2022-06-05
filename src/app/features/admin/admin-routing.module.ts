import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { CategoryUpdateComponent } from './categories/category-update/category-update.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          breadcrumbs: [{ label: 'Trang chủ' }],
        },
      },
      {
        path: 'products',
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
            path: 'update/:id',
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
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoryListComponent,
            data: {
              breadcrumbs: [
                { label: 'Trang chủ', url: '/admin' },
                { label: 'Danh sách danh mục' },
              ],
            },
          },
          {
            path: 'new',
            component: CategoryNewComponent,
            data: {
              breadcrumbs: [
                { label: 'Trang chủ', url: '/admin' },
                { label: 'Danh sách danh mục', url: '/admin/categories' },
                { label: 'Thêm danh mục mới' },
              ],
            },
          },
          {
            path: 'update/:id',
            component: CategoryUpdateComponent,
            data: {
              breadcrumbs: [
                { label: 'Trang chủ', url: '/admin' },
                { label: 'Danh sách danh mục', url: '/admin/categories' },
                { label: 'Cập nhật danh mục' },
              ],
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
