import { BrandService } from './../../services/brand.service';
import { BrandModel } from './../../models/BrandsModel';
import { CarListService } from './../../services/car-list.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm!: FormGroup;
  carBrands: BrandModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private carListService: CarListService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getCarsBrands();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(4)]],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [
        'https://www.avek.com.tr/Images/Blogs/Image/audi-e-tron-elektrikli-arac-1-a5848f86-eb45-4759-9ec2-ac47cea810a1.jpg',
        Validators.required,
      ],
      state: ['', Validators.required],
      model: ['', Validators.required],
    });
  }
  getCarsBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.carBrands = response;
    });
  }
  add() {
    console.log(this.carAddForm.value);
    if (this.carAddForm.value) {
      let carInputDatas = Object.assign({}, this.carAddForm.value);
      this.carListService.add(carInputDatas).subscribe(
        (response) => {
          this.toastrService.success(
            response.message,
            'Car Added Succesfully!'
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
}
