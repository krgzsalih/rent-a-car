import { CarListModel } from './../../models/CarListModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarListService } from 'src/app/services/car-list.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css'],
})
export class CardetailsComponent implements OnInit {
  carDetails: CarListModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CarListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarsDetails(params['id']);
    });
  }

  getCarsDetails(id: number) {
    this.service.getCarsDetails(id).subscribe((response) => {
      this.carDetails = response;
    });
  }
}
