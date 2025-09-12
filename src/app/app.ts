import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RayyanAli-Khan-Learning-Angular');

  studentName:string = 'Rayyan Ali Khan';
  courseName:string = 'JavaScript Frameworks - Fall 2025';
}
