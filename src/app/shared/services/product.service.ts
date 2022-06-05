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

  getProduct(id: string) {
    return this.http.get<ProductElement>(`products/${id}`);
  }

  getProductsWithPaginator(
    page: string | number,
    size: string | number,
    keyword: string,
    filter_by: string
  ) {
    return this.http.get<ProductPaginatorElement>(
      `products?page=${page}&limit=${size}&sort_by=new-date&keyword=${keyword}&filter_by=${filter_by}`
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

  updateProducts(payload: ProductElement) {
    return this.http.put<ProductElement>(`products/${payload._id}`, payload);
  }

  deleteProducts(id: string) {
    return this.http.delete<ProductElement>(`products/${id}`);
  }
}
