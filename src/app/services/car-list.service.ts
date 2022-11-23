import { ColorModel } from './../models/ColorsModel';
import { BrandModel } from './../models/BrandsModel';
import { ColorsComponent } from './../components/colors/colors.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarListModel } from './../models/CarListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarListService {
  apiUrl: string = 'http://localhost:3000/car-list';
  queryUrl: string = '';
  selectedBrand: BrandModel;
  selectedColor: ColorModel;

  // private brand = new BehaviorSubject('default');
  // currentBrand = this.brand.asObservable();

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.createApiUrl());
  }
  // getCarList(): Observable<CarListModel[]> {
  //   return this.httpClient.get<CarListModel[]>(this.apiUrl + '?state=1');
  // }
  // getCarsByBrandId(id: number): Observable<CarListModel[]> {
  //   return this.httpClient.get<CarListModel[]>(this.apiUrl + '?brandId=' + id);
  // }
  getCarsDetails(id: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.apiUrl + '?id=' + id);
  }
  // getCarsByColorId(id: number): Observable<CarListModel[]> {
  //   return this.httpClient.get<CarListModel[]>(this.apiUrl + '?colorId=' + id);
  // }
  // getCarsByBrandAndColorId(brandId: number, colorId: number) {
  //   return this.httpClient.get<CarListModel[]>(
  //     this.apiUrl + '?brandId=' + brandId + '&colorId=' + colorId
  //   );
  // }

  setSelectedBrand(brand) {
    console.log('setSelectedBrand', brand);
    console.log('Color', this.selectedColor);

    this.selectedBrand = brand;
  }
  setSelectedColor(color) {
    console.log('setSelectedColor', color);
    console.log('Brand', this.selectedBrand);
    this.selectedColor = color;
  }
  resetSelectedColor() {
    this.selectedColor = null;
  }
  resetSelectedBrand() {
    this.selectedBrand = null;
  }
  createApiUrl() {
    if (this.selectedBrand) {
      this.queryUrl = this.apiUrl + '?brandId=' + this.selectedBrand.id;
    }
    if (this.selectedColor) {
      this.queryUrl = this.apiUrl + '&colorId=' + this.selectedColor.id;
    }
    if (this.selectedBrand && this.selectedColor) {
      this.queryUrl =
        this.apiUrl +
        '?brandId=' +
        this.selectedBrand.id +
        '&colorId=' +
        this.selectedColor.id;
    }
    if (!this.selectedBrand && !this.selectedColor) {
      this.queryUrl = this.apiUrl + '?state=1';
    }
    return this.queryUrl;
  }

  add(data: CarListModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl, data);
  }
  updateCarProps(id: number, data: CarListModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + '/' + id, data);
  }
  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + '/' + id);
  }
}
