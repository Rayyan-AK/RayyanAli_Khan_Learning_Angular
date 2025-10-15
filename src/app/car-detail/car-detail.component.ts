import {Component, OnInit} from '@angular/core';
import { Car } from "../Shared/Models/car";
import {ActivatedRoute} from '@angular/router';
import {cars} from '../data/mock-content';

@Component({
  selector: 'app-car-detail',
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute
  ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params=> {
          const vin = params.get('vin');
          this.car = cars.find(c => c.vin === vin);
        });
    }
}
