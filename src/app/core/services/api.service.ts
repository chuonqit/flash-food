import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(environment.apiUrl + path, httpOptions);
  }

  post<T>(path: string, payload: any | null): Observable<T> {
    return this.http.post<T>(environment.apiUrl + path, payload, httpOptions);
  }

  put<T>(path: string, payload: any | null): Observable<T> {
    return this.http.put<T>(environment.apiUrl + path, payload, httpOptions);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(environment.apiUrl + path, httpOptions);
  }
}
