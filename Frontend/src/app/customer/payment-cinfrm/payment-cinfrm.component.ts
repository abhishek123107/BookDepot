import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-cinfrm',
  standalone: true,
  templateUrl: './payment-cinfrm.component.html',
  styleUrls: ['./payment-cinfrm.component.css']
})
export class PaymentCinfrmComponent {
  constructor(private router: Router) {}

  goToOrders() {
    this.router.navigate(['/trackOrder']);
  }

  goToShop() {
    this.router.navigate(['customer/home']);
  }
}

