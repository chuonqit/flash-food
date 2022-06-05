import {
  CategoryElement,
  CategoryPaginatorElement,
} from './../models/Category.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductsCategoryElement } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: ApiService) {}

  getCategories() {
    return this.http.get<CategoryElement[]>('categories');
  }

  getCategoriesWithPaginator(
    page: string | number,
    size: string | number,
    keyword: string,
    filter_by: string
  ) {
    return this.http.get<CategoryPaginatorElement>(
      `categories?page=${page}&limit=${size}&sort_by=new-date&keyword=${keyword}&filter_by=${filter_by}`
    );
  }

  addCategory(payload: CategoryElement) {
    return this.http.post<CategoryElement>('categories', payload);
  }

  getProductsCategoriesType(type: string) {
    return this.http.get<CategoryElement[]>(`categories/list-type/${type}`);
  }

  getProductsCategoryType(type: string | null) {
    return this.http.get<ProductsCategoryElement>(`categories/type/${type}`);
  }

  getProductsCategoryAscii(ascii: string | null) {
    return this.http.get<ProductsCategoryElement>(`categories/ascii/${ascii}`);
  }
  getCategory(id: string) {
    return this.http.get<CategoryElement>(`categories/${id}`);
  }

  deleteCategory(id: string) {
    return this.http.delete<CategoryElement>(`categories/${id}`);
  }

  updateCategory(payload: CategoryElement) {
    return this.http.put<CategoryElement>(`categories/${payload._id}`, payload);
  }
}
