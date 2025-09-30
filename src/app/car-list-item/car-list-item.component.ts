import {Component, Input} from '@angular/core';
import {Car} from '../Shared/Models/car';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-car-list-item',
  imports: [
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car!: Car;
}
