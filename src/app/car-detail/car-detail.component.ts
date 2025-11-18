import {Component, OnInit} from '@angular/core';
import { Car } from "../Shared/Models/car";
import {ActivatedRoute} from '@angular/router';
import {cars} from '../data/mock-content';
import {CurrencyPipe, DatePipe, NgClass, NgIf, UpperCasePipe} from "@angular/common";
import {PriceRangePipe} from '../Pipes/price-range.pipe';
import {HighlightOnFocusDirective} from '../Directives/highlight-on-focus.directive';

@Component({
  selector: 'app-car-detail',
  imports: [
    NgIf,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    NgClass,
    PriceRangePipe,
    HighlightOnFocusDirective
  ],
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
