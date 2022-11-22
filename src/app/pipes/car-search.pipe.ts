import { CarListModel } from './../models/CarListModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carSearch',
})
export class CarSearchPipe implements PipeTransform {
  transform(value: CarListModel[], carFilter: string): CarListModel[] {
    carFilter = carFilter ? carFilter.toLocaleLowerCase() : '';

    return carFilter
      ? value.filter(
          (c: CarListModel) =>
            c.model.toLocaleLowerCase().indexOf(carFilter) !== -1
        )
      : value;
  }
}
