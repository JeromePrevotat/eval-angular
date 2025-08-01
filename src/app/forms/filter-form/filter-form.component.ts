import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IconsPipe } from '../../pipes/icons.pipe';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [ReactiveFormsModule, IconsPipe],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})
export class FilterFormComponent {
  productService: ProductService = inject(ProductService);
  filterForm: FormGroup;
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      title: [''],
      category: [''],
      silent: [false],
      remote: [false],
      led: [false],
      movable: [false],
      eco: [false],
      360: [false],
      schedule: [false],
      highPerformance: [false],
      wifi: [false],
      carryable: [false],
      usb: [false],
      green: [false],
      water: [false],
      industrial: [false],
      power: [false],
      solid: [false],
      wall: [false],
      speed: [false],
      oscillating: [false]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.filterForm.get(fieldName);
    // Retourne true si TOUTES ces conditions sont vraies :
    //    champ existe ET champ invalide ET (champ dirty OU touched OU formulaire est soumis)
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
  const field = this.filterForm.get(fieldName);
  if (field && field.errors) {
    if (field.errors['required']) return `${fieldName} is required`;
    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} characters`;
    }
  }
    return '';
  }

  submitCreateStation(){
    this.isSubmitted = true;
    console.log('Form submitted:', this.filterForm.value);
    if (this.filterForm.valid) {
      this.isLoading = true;
      console.log('Form submitted successfully:', this.filterForm.value);
      // .subscribe({
      //   next: (response) => {
      //     
      //   },
      //   error: (error) => {
      //     
      //   }
      // });
      this.isLoading = false;
      this.filterForm.reset();
      this.isSubmitted = false;
    } else {
      console.error('Form is invalid:', this.filterForm.errors);
    }
  }
}
