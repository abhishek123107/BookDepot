import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  baseUrl:string = '/api/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('${environment.apiUrl}${this.baseUrl}');
  }

 

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('${environment.apiUrl}${this.baseUrl}', customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('${environment.apiUrl}${this.baseUrl}/${customer.id}', customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>('${environment.apiUrl}${this.baseUrl}/${id}');
  }

}
