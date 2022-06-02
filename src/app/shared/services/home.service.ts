import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { HomeElement } from '../models/Home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: ApiService) {}

  getHomeData() {
    return this.http.get<HomeElement>('home');
  }
}
