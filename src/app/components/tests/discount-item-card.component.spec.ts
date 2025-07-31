import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountItemCardComponent } from './discount-item-card.component';

describe('DiscountItemCardComponent', () => {
  let component: DiscountItemCardComponent;
  let fixture: ComponentFixture<DiscountItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountItemCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
