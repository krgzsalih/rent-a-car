import { BrandModel } from './../models/BrandsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  path: string = 'http://localhost:3000/brands';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<BrandModel[]> {
    return this.httpClient.get<BrandModel[]>(this.path);
  }
  add(data: any): Observable<BrandModel> {
    return this.httpClient.post<BrandModel>(this.path, data);
  }
}
