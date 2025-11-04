import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bank-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css'],
})
export class BankDetailComponent {
  amount: number = 500; // Example fixed amount
  selectedOption: string = '';
  result: string = '';

  upiId: string = '';
  accountNumber: string = '';
  ifscCode: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';
  book: any = null;
  paymentSuccess: boolean = false;
  paymentId: string = '';
  private apiUrl = environment.apiUrl;
  private apiRoot = environment.apiUrl.replace(/\/api\/?$/, '');

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.book = this.apiService.getBook(); // fetch book from service

    if (!this.book) {
      this.book = {
        title: 'No Book selected',
        author: '',
        price: 0,
        currency: '',
        image: '',
      };
    }
  }

  onpaymentOptionChange(option: string) {
    this.selectedOption = option;
    this.result = '';
  }

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
          .post(`${this.apiUrl}/payment/transfer/`, {
            payment_id: this.paymentId,
            amount: this.amount,
          })
          .subscribe(() => {
            alert('Payment successful and transferred to bank!');
            this.router.navigate(['customer/payment-confirm']);
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
  payWithCOD() {
    // Here you can also send order details to backend
    alert(
      `✅ Thank you! Order Confirmed. Pay ₹${
        this.book?.price || '0.00'
      } in cash at delivery.`
    );
    this.router.navigate(['customer/home']);
  }

  payWithUPI() {
    if (!this.upiId) {
      this.result = '❌ Enter UPI ID!';
      return;
    }
    const payload = { amount: this.amount, method: 'UPI', upiId: this.upiId };
    this.http.post(`${this.apiRoot}/pay/`, payload).subscribe({
      next: (res: any) => {
        this.result = `✅ Payment Successful via UPI (${this.upiId})`;
        this.router.navigate(['customer/payment-confirm']);
      },
      error: () => (this.result = '❌ Payment Failed'),
    });
  }

  payWithBank() {
    if (!this.accountNumber || !this.ifscCode) {
      this.result = '❌ Enter Account Number and IFSC!';
      return;
    }
    const payload = {
      amount: this.amount,
      method: 'Bank Transfer',
      accountNumber: this.accountNumber,
      ifsc: this.ifscCode,
    };
    this.http.post(`${this.apiRoot}/pay/`, payload).subscribe({
      next: (res: any) => {
        this.result = `✅ Payment Successful via Bank Transfer (${this.accountNumber})`;
        this.router.navigate(['customer/payment-confirm']);
      },
      error: () => (this.result = '❌ Payment Failed'),
    });
  }

  payWithCard() {
    if (!this.cardNumber || !this.expiry || !this.cvv) {
      this.result = '❌ Enter complete card details!';
      return;
    }
    const payload = {
      amount: this.amount,
      method: 'Card',
      cardNumber: this.cardNumber,
      expiry: this.expiry,
    };
    this.http.post(`${this.apiRoot}/pay/`, payload).subscribe({
      next: (res: any) => {
        this.result = `✅ Payment Successful via Card (${this.cardNumber.slice(
          -4
        )})`;
        this.router.navigate(['customer/payment-confirm']);
      },
      error: () => (this.result = '❌ Payment Failed'),
    });
  }
}
