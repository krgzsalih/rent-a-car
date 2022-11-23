import { ActivatedRoute } from '@angular/router';
import { CarListService } from 'src/app/services/car-list.service';
import { ColorModel } from './../../models/ColorsModel';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colorsNames: ColorModel[] = [];
  colorId: number = 0;
  constructor(
    private service: ColorService,
    private carService: CarListService
  ) {}

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.service.getColors().subscribe((response) => {
      this.colorsNames = response;
    });
  }
  selectedColor(data: ColorModel) {
    this.carService.setSelectedColor(data);
  }
}
