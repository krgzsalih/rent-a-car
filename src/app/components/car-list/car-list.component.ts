import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CarListModel } from './../../models/CarListModel';
import { Component, OnInit } from '@angular/core';
import { CarListService } from 'src/app/services/car-list.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carList: CarListModel[] = [];
  carFilter: string = '';
  constructor(
    private service: CarListService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrandId(params['id']);
      } else if (params['state']) {
        this.getCarList(params['state']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarList(1);
      }
    });
  }
  getCarList(state: number) {
    this.service.getCarList(state).subscribe((response) => {
      this.carList = response;
    });
  }
  getCarsByBrandId(id: number) {
    this.service.getCarsByBrandId(id).subscribe((response) => {
      this.carList = response;
    });
  }
  getCarsByColorId(id: number) {
    this.service.getCarsByColorId(id).subscribe((response) => {
      this.carList = response;
    });
  }
  getCarsByBrandAndColorId(brandId: number, colorId: number) {
    this.service
      .getCarsByBrandAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.carList = response;
      });
  }
}
