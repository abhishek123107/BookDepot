import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { BrowserStorageService } from '../services/browser-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  orders: any[] = [];
  private apiUrl = 'http://127.0.0.1:8000/api/user/profile/';
  private ordersUrl = 'http://127.0.0.1:8000/api/customer/orders/';
  private updateOrderStatusUrl =
    'http://127.0.0.1:8000/api/order/update-status/';
  showForm: boolean = false;

  showOrder() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.fetchOrders();
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: BrowserStorageService
  ) {}

  ngOnInit() {
    if (!this.storage.isBrowser()) {
      // Not running in browser, skip localStorage logic
      return;
    }
    const storedUser = this.storage.getItem('user');
    if (!storedUser) {
      this.router.navigate(['/login']);
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    const userId = parsedUser.id;
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }
    // Fetch profile
    this.http.post<any>(this.apiUrl, { customer_id: userId }).subscribe(
      (res) => {
        if (res.status === 'success') {
          this.user = res.user;
        } else {
          this.user = null;
        }
      },
      (error) => {
        this.user = null;
      }
    );
  }

  fetchOrders() {
    if (!this.user || !this.user.email) return;
    this.http.post<any>(this.ordersUrl, { email: this.user.email }).subscribe(
      (res) => {
        if (res.success) {
          this.orders = res.orders;
        } else {
          this.orders = [];
        }
      },
      (error) => {
        this.orders = [];
      }
    );
  }

  updateStatus(orderId: string, status: string) {
    this.http
      .post<any>(this.updateOrderStatusUrl, { order_id: orderId, status })
      .subscribe((res) => {
        if (res.success) {
          this.fetchOrders();
        }
      });
  }

  logout() {
    this.storage.removeItem('user');
    this.router.navigate(['/login']);
  }

  goToTrackOrder(orderId: string) {
    this.router.navigate(['/track-order', orderId]);
  }

  trackOrder() {
    this.router.navigate(['/trackOrder']);
  }

  updateProfile() {
    this.router.navigate(['/editProfile']);
  }
}
