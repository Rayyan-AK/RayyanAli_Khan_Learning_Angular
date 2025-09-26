import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './Shared/Models/car';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RayyanAli-Khan-Learning-Angular');

  studentName:string = 'Rayyan Ali Khan';
  courseName:string = 'JavaScript Frameworks - Fall 2025';

  cars: Car[] = [
    {vin: '1HGCM82633A004352', make: 'Honda', model: 'Civic', year: 2020, color: 'Blue'},
    {vin: '2C3KA53G76H123456', make: 'Chrysler', model: '300', year: 2018},
    {vin: '3FAHP0HA8AR123789', make: 'Ford', model: 'Fusion', year: 2021, color: 'Red'},
    {vin: '1N4AL11D75C109876', make: 'Nissan', model: 'Altima', year: 2019, color: 'Black'},
    {vin: '5YJSA1E26HF123654', make: 'Tesla', model: 'Model S', year: 2022},
    {vin: 'JH4KA8270MC123321', make: 'Acura', model: 'Legend', year: 1995, color: 'White'}
  ];
}
