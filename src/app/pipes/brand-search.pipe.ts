import { BrandModel } from './../models/BrandsModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandSearch',
})
export class BrandSearchPipe implements PipeTransform {
  transform(value: BrandModel[], filterBrand: string): BrandModel[] {
    filterBrand = filterBrand ? filterBrand.toLocaleLowerCase() : '';

    return filterBrand
      ? value.filter(
          (b: BrandModel) =>
            b.name.toLocaleLowerCase().indexOf(filterBrand) !== -1
        )
      : value;
  }
}
