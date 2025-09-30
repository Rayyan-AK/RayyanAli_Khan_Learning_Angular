import {Component, Input} from '@angular/core';
import {Car} from '../Shared/Models/car';

@Component({
  selector: 'app-car-list-item',
  imports: [],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent {
  @Input() car!: Car;
}
