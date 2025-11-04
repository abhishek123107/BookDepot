import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FilterPipe } from './filter.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BookStoreService } from '../../services/book-store.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-educational',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, RouterOutlet],
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css'],
})
export class EducationalComponent {
  private apiUrl = `${environment.apiUrl}/educational`;

  myClassName: string = 'bg-primary';

  searchText: string = '';

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient,
    private store: BookStoreService
  ) {}

  ngOnInit(): void {
    // merge seeded books with any books added via admin
    const remote = this.store.getBooks('educational') || [];
    this.books = [...this.books, ...remote];
  }

  goToShopingPage(book: any) {
    this.apiService.setBook(book);
    this.router.navigate(['customer/home/religious/shoping']);
  }

  books = [
    {
      title: 'Lucent’s General Knowledge',
      author: 'Dr. Binay Karna',
      price: 350,
      currency: 'Rupees only',
      image: 'books/img a.jpg',
    },
    {
      title: 'Manorama Yearbook',
      author: 'Mammen Mathew',
      price: 350,
      currency: 'Rupees only',
      image: 'books/img a (2).jpg',
    },
    {
      title: 'Quantitative Aptitude',
      author: 'R.S. Aggarwal',
      price: 600,
      currency: 'Rupees only',
      image: 'books/img a (5).jpg',
    },
    {
      title: 'Fast Track Objective Arithmetic',
      author: 'Rajesh Verma',
      price: 550,
      currency: 'Rupees only',
      image: 'books/img a (4).jpg',
    },
    {
      title: 'Word Power Made Easy',
      author: 'Norman Lewis',
      price: 250,
      currency: 'Rupees only',
      image: 'books/img a (3).jpg',
    },
    {
      title: 'High School English Grammar & Composition',
      author: 'Wren & Martin',
      price: 300,
      currency: 'Rupees only',
      image: 'books/img a (1).jpg',
    },
    {
      title: 'Concepts of Physics',
      author: 'H.C. Verma',
      price: 650,
      currency: 'Rupees only',
      image: 'books/img a (7).jpg',
    },
    {
      title: 'India’s Struggle for Independence',
      author: 'Bipan Chandra',
      price: 400,
      currency: 'Rupees only',
      image: 'books/img a (8).jpg',
    },
    {
      title: 'Indian Polity',
      author: 'M. Laxmikanth',
      price: 750,
      currency: 'Rupees only',
      image: 'books/img a (6).jpg',
    },
  ];
}
