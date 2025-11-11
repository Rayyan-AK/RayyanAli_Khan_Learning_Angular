import { Pipe, PipeTransform } from '@angular/core';
import {Car} from '../Shared/Models/car';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(price: number | undefined): string {

    if (price == null) {
      return "";
    } else {

      if(price >= 20000) {
        return "over";
      } else {
        return "under";
      }
    }
  }

}
