import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  amount: number = 500; // Example amount in INR
  paymentSuccess = false;
  paymentId: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  payWithRazorpay() {
    const options: any = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
      amount: this.amount * 100, // Amount in paise
      currency: 'INR',
      name: 'BookDepot',
      description: 'Order Payment',
      handler: (response: any) => {
        this.paymentSuccess = true;
        this.paymentId = response.razorpay_payment_id;
        // Call backend to transfer to bank
        this.http
          .post(`${environment.apiUrl}/payment/transfer/`, {
            payment_id: this.paymentId,
            amount: this.amount,
          })
          .subscribe(() => {
            alert('Payment successful and transferred to bank!');
            this.router.navigate(['/profile']);
          });
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#007bff',
      },
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
}
