import { ColorModel } from './../models/ColorsModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'http://localhost:3000/colors';
  constructor(private httpClient: HttpClient) {}
  getColors(): Observable<ColorModel[]> {
    return this.httpClient.get<ColorModel[]>(this.apiUrl);
  }
  getColorsById(id: number): Observable<ColorModel[]> {
    return this.httpClient.get<ColorModel[]>(this.apiUrl + '?id=' + id);
  }
}
