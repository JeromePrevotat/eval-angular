import { Component } from '@angular/core';
import { DiscountDisplayComponent } from '../discount-display/discount-display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscountDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
