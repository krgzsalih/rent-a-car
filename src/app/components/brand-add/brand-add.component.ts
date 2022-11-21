import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: BrandService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    console.log(this.brandAddForm.value);
    this.service.add(this.brandAddForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
