import { Pipe, PipeTransform } from '@angular/core';
import {Car} from '../Shared/Models/car';

@Pipe({
  name: 'fullSpec'
})
export class FullSpecPipe implements PipeTransform {

  transform(car: Car): string {
    return `${car.make} - ${car.model}`;
  }

}
