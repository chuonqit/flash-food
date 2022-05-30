import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { TestProduct } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: ApiService) {}

  getProducts() {
    return this.http.get<TestProduct[]>('todos');
  }
}
