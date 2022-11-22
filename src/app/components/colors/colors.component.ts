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
  constructor(private service: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.service.getColors().subscribe((response) => {
      this.colorsNames = response;
    });
  }
}
