import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Order } from './order.model';
import { Book } from './order.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {

  // ✅ Declare book properly
  book: Book | null = null;

  // ✅ Initialize order with nested book object
  order: Order = {
    book: {
      title: '', 
      author: '', 
      price: 0,
    },
    customer_name: '',
    email: '',
    address: '',
    state: '',
    district: '',
    pin: '',
    landmark: '',
    phone: ''
  };

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    // ✅ Fetch book from service
    this.book = this.apiService.getBook();

    if (this.book) {
      // ✅ Map book into order
      this.order.book = {
        title: this.book.title,
        author: this.book.author,
        price: this.book.price
      };
    }

    console.log("Order initialized:", this.order);
  }

  placeOrder() {
    // ✅ Debug payload
    console.log("Sending order:", this.order);

    this.apiService.saveOrder(this.order).subscribe({
      next: (res) => {
        alert('✅ Saved your order and make your payment!');
        if(res.success){
          this.router.navigate(['customer/home/educational/shoping/order/payment/']);
        } 
        //this.router.navigate(['customer/home/educational/shopping/order/payment/']);
      },
      error: (err) => {
        console.error("❌ Failed to place order:", err);
        alert('❌ Failed to place order!');
      }
    });
  }
}
