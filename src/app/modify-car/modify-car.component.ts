import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../Services/car.service';
import {Car} from '../Shared/Models/car';


@Component({
  standalone: true,
  selector: 'app-modify-car',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-car.component.html',
  styleUrls: ['./modify-car.component.css']
})
export class ModifyCarComponent implements OnInit{
  carForm: FormGroup;
  car: Car | undefined;
  error: string | null = null;
  currentYear = new Date().getFullYear();


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      vin: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],
      make: ['', [Validators.required, this.noSpecialChars]],
      model: ['', Validators.required],
      year: ['', [Validators.required, this.yearValidator]],
      color: ['']
    });
  }

  noSpecialChars(control: AbstractControl): ValidationErrors | null {
    return /[!#?]/.test(control.value) ? { specialChars: true } : null;
  }

  yearValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const year = Number(value);
    const currentYear = new Date().getFullYear();

    if (isNaN(year)) {
      return { invalidYear: true };
    }

    if (year < 1886) {
      return { invalidYear: true };
    }

    if (year > currentYear) {
      return { invalidYear: true };
    }

    return null;
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
    console.log('Form valid?', this.carForm.valid, this.carForm.value);

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
