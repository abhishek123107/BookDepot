import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../customer/order-page/order.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';  // Django API base URL
  private selectedBook: any = null;
 
  constructor(private http: HttpClient) {}

  // ✅ Save Order
  saveOrder(order: Order): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders/`, order);
  }

  // ✅ Send OTP
  sendOtp(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-otp/`, { email });
  }

  // ✅ Verify OTP
  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/verify-otp/`, { email, otp });
  }

  // ✅ Reset Password
  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reset-password/`, {
      email,
      new_password: newPassword
    });
  }

  // ✅ Store selected book
  setBook(book: any) {
    this.selectedBook = book;
  }

  // ✅ Get selected book
  getBook(): any {
    console.log("Book fetched from service:", this.selectedBook);
    return this.selectedBook;
  }
}
