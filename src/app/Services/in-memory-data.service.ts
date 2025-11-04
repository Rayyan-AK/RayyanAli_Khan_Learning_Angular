import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Car} from '../Shared/Models/car';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {cars: Car[]} {
    const cars: Car[] = [
      {vin: '1HGCM82633A004352', make: 'Honda', model: 'Civic', year: 2020, color: 'Black', image: 'cars/HondaCivic.png'},
      {vin: '2C3KA53G76H123456', make: 'Chrysler', model: '300', year: 2018, image: 'cars/Chrysler.png'},
      {vin: '3FAHP0HA8AR123789', make: 'Ford', model: 'Fusion', year: 2021, color: 'Red', image: 'cars/FordFusion.png'},
      {vin: '1N4AL11D75C109876', make: 'Nissan', model: 'Altima', year: 2019, color: 'Black', image: 'cars/NissanAltima.png'},
      {vin: '5YJSA1E26HF123654', make: 'Tesla', model: 'Model S', year: 2022, image: 'cars/TeslaS.png'},
      {vin: 'JH4KA8270MC123321', make: 'Acura', model: 'Legend', year: 1995, color: 'White', image: 'cars/AcuraLegend.png'}
    ];

    return { cars };
  }
}
