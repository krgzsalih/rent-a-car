import { CarListService } from './../../services/car-list.service';
import { BrandModel } from './../../models/BrandsModel';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  brandsData: BrandModel[] = [];
  brandFilter: string = '';
  constructor(
    private service: BrandService,
    private carService: CarListService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.service.getBrands().subscribe((response) => {
      this.brandsData = response;
    });
  }
  selectedBrandId(data: BrandModel) {
    console.log(data, 'SEÇİLEN BRAND');
    this.carService.setSelectedBrand(data);
  }
}
