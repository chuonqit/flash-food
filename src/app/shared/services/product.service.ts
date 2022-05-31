import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductElement, TestProduct } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: ApiService) {}

  getProducts() {
    return this.http.get<ProductElement[]>('products');
  }

  getProductsPromotion() {
    return this.http.get<ProductElement[]>('products/promotion');
  }

  searchProducts(keyword: string) {
    return this.http.post<ProductElement[]>('products/search', { keyword });
  }
}
