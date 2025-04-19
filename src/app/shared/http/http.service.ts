import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'environments/environments';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly baseUrl = environments.apiRestaurantUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    const fullUrl = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(fullUrl, {
      params: new HttpParams({ fromObject: params }),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: false,
    });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    const fullUrl = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(fullUrl, body, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: false,
    });
  }
}
