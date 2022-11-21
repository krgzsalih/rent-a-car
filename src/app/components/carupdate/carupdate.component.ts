import { BrandModel } from './../../models/BrandsModel';
import { BrandService } from './../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { CarListModel } from './../../models/CarListModel';
import { CarListService } from './../../services/car-list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormControl,
  FormRecord,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carupdate',
  templateUrl: './carupdate.component.html',
  styleUrls: ['./carupdate.component.css'],
})
export class CarupdateComponent implements OnInit {
  getPrevData: CarListModel[] = [];
  updatedCarProps!: FormGroup;
  brandNames: BrandModel[] = [];
  timer: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CarListService,
    private brandsService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private goBack: Location
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getBrands().subscribe((response) => {
      this.brandNames = response;
      this.activatedRoute.params.subscribe((params) => {
        this.getCarsDetails(params['id']);
      });
    });
  }
  getCarsDetails(id: number) {
    this.service.getCarsDetails(id).subscribe((response) => {
      this.getPrevData = response;
      this.createCarUpdateForm();
    });
  }
  createCarUpdateForm() {
    this.updatedCarProps = this.formBuilder.group({
      model: [this.getPrevData[0].model, Validators.required],
      brandId: [this.getPrevData[0].brandId, Validators.required],
      year: [
        this.getPrevData[0].year,
        [Validators.required, Validators.max(4)],
      ],
      price: [this.getPrevData[0].price, Validators.required],
      imagePath: [this.getPrevData[0].imagePath, Validators.required],
      state: [this.getPrevData[0].state, Validators.required],
      description: [this.getPrevData[0].description, Validators.required],
    });
  }

  update(id: number) {
    console.log(this.updatedCarProps.value);
    let carInputDatas = Object.assign({}, this.updatedCarProps.value);
    this.service.updateCarProps(id, carInputDatas).subscribe(
      (response) => {
        this.toastrService.success(
          response.message,
          'Car Updated Succesfully!'
        );
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'There is error with datas!'
            );
          }
        }
      }
    );
    // this.updatedCarProps.reset();
    this.goBack.back();
  }
  deleteCar(id: number) {
    this.service.delete(id).subscribe(
      (response) => {
        this.toastrService.success(
          response.message,
          'Car Deleted Succesfully!'
        );
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'There is error with datas!'
            );
          }
        }
      }
    );
  }
}
