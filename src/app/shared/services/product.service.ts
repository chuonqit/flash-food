import { AttributeElement } from './../models/Attribute.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import {
  ProductElement,
  ProductPaginatorElement,
} from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: ApiService) {}

  getProducts() {
    return this.http.get<ProductElement[]>('products');
  }

  getProductsWithPaginator(page: string | number, size: string | number) {
    return this.http.get<ProductPaginatorElement>(
      `products?page=${page}&limit=${size}&sort_by=new-date`
    );
  }

  getProductsPromotion() {
    return this.http.get<ProductElement[]>('products/promotion');
  }

  searchProducts(keyword: string) {
    return this.http.post<ProductElement[]>('products/search', { keyword });
  }

  getAttributeType(parentType: string) {
    return this.http.get<AttributeElement[]>(
      `attributes/products/${parentType}`
    );
  }

  createProducts(payload: ProductElement) {
    return this.http.post<ProductElement>('products', payload);
  }
}
