import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCinfrmComponent } from './payment-cinfrm.component';

describe('PaymentCinfrmComponent', () => {
  let component: PaymentCinfrmComponent;
  let fixture: ComponentFixture<PaymentCinfrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCinfrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCinfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
