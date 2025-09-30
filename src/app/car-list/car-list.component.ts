import { Component } from '@angular/core';
import {Car} from '../Shared/Models/car';
import {CarListItemComponent} from '../car-list-item/car-list-item.component';


@Component({
  selector: 'app-car-list',
  imports: [
    CarListItemComponent
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: Car[] = [
    {vin: '1HGCM82633A004352', make: 'Honda', model: 'Civic', year: 2020, color: 'Blue'},
    {vin: '2C3KA53G76H123456', make: 'Chrysler', model: '300', year: 2018},
    {vin: '3FAHP0HA8AR123789', make: 'Ford', model: 'Fusion', year: 2021, color: 'Red'},
    {vin: '1N4AL11D75C109876', make: 'Nissan', model: 'Altima', year: 2019, color: 'Black'},
    {vin: '5YJSA1E26HF123654', make: 'Tesla', model: 'Model S', year: 2022},
    {vin: 'JH4KA8270MC123321', make: 'Acura', model: 'Legend', year: 1995, color: 'White'}
  ];
}
