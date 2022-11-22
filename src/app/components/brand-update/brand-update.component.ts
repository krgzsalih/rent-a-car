import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrandModel } from './../../models/BrandsModel';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  getBrands: BrandModel[] = [];
  brandUpdateForm!: FormGroup;
  constructor(
    private service: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getBrandsList();
  }
  getBrandsList() {
    this.service.getBrands().subscribe((response) => {
      this.getBrands = response;
    });
  }
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  update() {
    console.log(this.brandUpdateForm.value);
  }
}
