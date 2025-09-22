import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selling-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css']
})
export class SellingPageComponent {

  paymentOption = [
    'Credit Card',
    'Debit Card',
    'UPI',
    'Bank Transfer',
    'Cash on Delivery'
  ];

  selectedOption: string | null = null;

  onpaymentOptionChange(option: string) {
    this.selectedOption = option;
  }
 constructor(private router: Router) {}

 ngOnInit():void{}

 pay(){
  this.router.navigate(['customer/home/educational/shoping/order/payment/bank-detail']);
 }

}
