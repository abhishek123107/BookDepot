import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  standalone: true,
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.css'],
})
export class PaymentConfirmComponent {
  constructor(private router: Router) {}

  goToBankDetail() {
    this.router.navigate(['customer/bank-detail']);
  }
}
