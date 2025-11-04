import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // `environment.apiUrl` already contains the `/api` prefix. Use resource path after that.
  baseUrl: string = '/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}${this.baseUrl}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      `${environment.apiUrl}${this.baseUrl}`,
      customer
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    // prefer the backend's customer_id field; fall back to optional id
    const custId = (customer.customer_id ?? customer.id) as number | string;
    return this.http.put<Customer>(
      `${environment.apiUrl}${this.baseUrl}/${custId}`,
      customer
    );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${this.baseUrl}/${id}`);
  }
}
