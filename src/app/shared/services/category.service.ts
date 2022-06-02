import { CategoryElement } from './../models/Category.model';
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

  getProductsCategoriesType(type: string) {
    return this.http.get<CategoryElement[]>(`categories/list-type/${type}`);
  }

  getProductsCategoryType(type: string | null) {
    return this.http.get<ProductsCategoryElement>(`categories/type/${type}`);
  }

  getProductsCategoryAscii(ascii: string | null) {
    return this.http.get<ProductsCategoryElement>(`categories/ascii/${ascii}`);
  }
}
