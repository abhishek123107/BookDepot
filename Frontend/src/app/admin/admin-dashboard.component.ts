import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { BookStoreService } from '../services/book-store.service';
import { BrowserStorageService } from '../services/browser-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  activeTab: string = 'books';

  // ===== Books =====
  books: any[] = [
    {
      id: 1,
      title: 'React Basics',
      author: 'Dan Abramov',
      price: 499,
      category: 'Programming',
      image: 'https://via.placeholder.com/100',
    },
  ];
  newBook = { title: '', author: '', price: 0, category: '', image: '' };
  // Local image selection for admin add-book
  selectedImageFile: File | null = null;
  previewImageUrl: string | null = null;

  // ===== Orders =====
  orders = [
    { id: 1, customer: 'John Doe', total: 1198, status: 'Confirmed' },
    { id: 2, customer: 'Jane Smith', total: 499, status: 'Pending' },
    { id: 3, customer: 'Mark Lee', total: 999, status: 'Confirmed' },
  ];
  get confirmedOrders() {
    return this.orders.filter(
      (o) => String(o.status).toLowerCase() === 'confirmed'
    );
  }

  // ===== Users =====
  users: any[] = [];
  userCount: number = 0;
  bookCount: number = 0;
  orderCount: number = 0;

  constructor(
    private ApiService: ApiService,
    private bookStore: BookStoreService,
    private router: Router,
    private storage: BrowserStorageService
  ) {}

  ngOnInit(): void {
    // Require admin login — if no user in localStorage, redirect to login and pass returnUrl
    const user = this.storage.getItem('user');
    if (!user) {
      this.router.navigate(['/customer/login'], {
        queryParams: { returnUrl: '/admin' },
      });
      return;
    }

    this.loadUsers();
    this.loadOrders();
    this.loadCounts();
  }

  loadCounts() {
    // Users
    this.ApiService.getUsersCount().subscribe({
      next: (data: any) => {
        if (Array.isArray(data)) this.userCount = data.length;
        else if (data && Array.isArray(data)) this.userCount = data.length;
        else if (data && typeof data === 'object' && data.length)
          this.userCount = data.length;
      },
      error: (err) => console.error('Error fetching users count', err),
    });

    // Orders
    this.ApiService.getOrdersCount().subscribe({
      next: (body: any) => {
        if (body && body.success && Array.isArray(body.orders))
          this.orderCount = body.orders.length;
      },
      error: (err) => console.error('Error fetching orders count', err),
    });

    // Books
    this.ApiService.getBooksCount().subscribe({
      next: (res: any) => {
        if (res && res.success && typeof res.count === 'number')
          this.bookCount = res.count;
      },
      error: (err) => console.error('Error fetching books count', err),
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Add Book
  addBook() {
    if (!this.newBook.title || !this.newBook.author || !this.newBook.price) {
      alert('Please fill all required fields!');
      return;
    }

    // Prefer an admin-selected local image preview, then provided URL, then placeholder
    const bookPayload = {
      ...this.newBook,
      image:
        this.previewImageUrl ||
        this.newBook.image ||
        'https://via.placeholder.com/100',
    };

    // Normalize admin category input to app category keys
    const cat = (this.newBook.category || '').toLowerCase().trim();
    let target: string = 'others';
    if (cat.includes('educat') || cat.includes('academic'))
      target = 'educational';
    else if (cat.includes('fiction') && !cat.includes('non'))
      target = 'fiction';
    else if (
      cat.includes('non') ||
      cat.includes('non-fiction') ||
      cat.includes('non fiction')
    )
      target = 'non-fiction';
    else if (cat.includes('hobb')) target = 'hobbies';
    else if (
      cat.includes('compet') ||
      cat.includes('compt') ||
      cat.includes('comp')
    )
      target = 'comptative';
    else if (cat.includes('child') || cat.includes('children'))
      target = 'children';

    this.bookStore.addBookToCategory(target, bookPayload);

    // Also add to local books table for admin view
    const newId = this.books.length + 1;
    this.books.push({
      id: newId,
      ...bookPayload,
      category: this.newBook.category,
    });

    alert(`Book added to ${target} category`);
    // cleanup preview object URL and selected file
    if (this.previewImageUrl) {
      try {
        URL.revokeObjectURL(this.previewImageUrl);
      } catch (e) {}
    }
    this.selectedImageFile = null;
    this.previewImageUrl = null;
    this.newBook = { title: '', author: '', price: 0, category: '', image: '' };
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      this.selectedImageFile = input.files[0];
      // revoke previous preview if any
      if (this.previewImageUrl) {
        try {
          URL.revokeObjectURL(this.previewImageUrl);
        } catch (e) {}
      }
      this.previewImageUrl = URL.createObjectURL(this.selectedImageFile);
    } else {
      // cleared
      if (this.previewImageUrl) {
        try {
          URL.revokeObjectURL(this.previewImageUrl);
        } catch (e) {}
      }
      this.selectedImageFile = null;
      this.previewImageUrl = null;
    }
  }

  // Load Users from backend
  loadUsers() {
    this.ApiService.getUsers().subscribe({
      next: (data: any) => {
        // backend returns list of customers
        this.users = Array.isArray(data) ? data : data;
      },
      error: (err) => console.error('Error fetching users:', err),
    });
  }

  // Load all orders from backend
  loadOrders() {
    this.ApiService.getAllOrders().subscribe({
      next: (body: any) => {
        if (body && body.success && Array.isArray(body.orders)) {
          this.orders = body.orders.map((o: any) => ({
            id: o.id || o._id || 0,
            customer: o.customer_name || o.email || '',
            total: o.book?.price || 0,
            status: o.status || 'confirmed',
            raw: o,
          }));
        } else {
          console.error('Unexpected orders payload', body);
        }
      },
      error: (err) => console.error('Error loading orders:', err),
    });
  }

  // Open details modal (just sets selectedOrder)
  selectedOrder: any = null;
  openOrderDetails(order: any) {
    this.selectedOrder = order.raw || order;
  }

  closeOrderDetails() {
    this.selectedOrder = null;
  }

  // Update order status
  changeOrderStatus(order: any, status: string) {
    const id = order.id || order._id || order.raw?.id || order.raw?._id;
    this.ApiService.updateOrderStatus(id, status).subscribe({
      next: (res) => {
        alert('Order status updated');
        this.loadOrders();
      },
      error: (err) => {
        console.error('Failed to update status', err);
        alert('Failed to update status');
      },
    });
  }

  // Save updated address for selected order
  saveOrderAddress() {
    if (!this.selectedOrder) return;
    const id =
      this.selectedOrder.id ||
      this.selectedOrder._id ||
      this.selectedOrder.raw?.id ||
      this.selectedOrder.raw?._id;
    const address = this.selectedOrder.address;
    if (!id) {
      alert('Order id not found');
      return;
    }
    this.ApiService.updateOrderAddress(id, address).subscribe({
      next: (res) => {
        alert('Address updated');
        this.closeOrderDetails();
        this.loadOrders();
      },
      error: (err) => {
        console.error('Failed to update address', err);
        alert('Failed to update address');
      },
    });
  }
}
