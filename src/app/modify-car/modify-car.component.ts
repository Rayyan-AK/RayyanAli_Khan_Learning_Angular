import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../Services/car.service';
import {Car} from '../Shared/Models/car';


@Component({
  selector: 'app-modify-car',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-car.component.html',
  styleUrl: './modify-car.component.css'
})
export class ModifyCarComponent implements OnInit{
  carForm: FormGroup;
  car: Car | undefined;
  error: string | null = null;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      vin: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      color: ['']
    });
  }
  ngOnInit(): void {

    const vin = String(this.route.snapshot.paramMap.get('vin'));
    if (vin) {

      this.carService.getCarByVin(vin).subscribe( {
        next: car => {
          if (car) {
            this.carForm.patchValue(car);
          }
        },
        error: err => {
          this.error = 'Error fetching car';
          console.error('Error fetching car:', err);
        }
      });
    }
  }

  onSubmit(): void {

    if (this.carForm.valid) {
      const car: Car = this.carForm.value;
      const vin = this.route.snapshot.paramMap.get('vin');

      if (vin) {
        this.carService.updateCar(car).subscribe(() => this.router.navigate(['/cars']));
      } else {
        this.carService.addCar(car).subscribe(() => this.router.navigate(['/cars']));
      }
    }
  }

  getHome(): void {
    this.router.navigate(['/cars'])
  }
}
