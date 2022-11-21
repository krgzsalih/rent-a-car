import { Observable } from 'rxjs';
import { CarListModel } from './../models/CarListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarListService {
  apiUrl: string = 'http://localhost:3000/car-list';
  constructor(private httpClient: HttpClient) {}
  getCarList(state: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.apiUrl + '?state=' + state);
  }
  getCarsByBrandId(id: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.apiUrl + '?brandId=' + id);
  }
  getCarsDetails(id: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.apiUrl + '?id=' + id);
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
