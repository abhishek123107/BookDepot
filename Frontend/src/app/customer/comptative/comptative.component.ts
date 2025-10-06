import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../educational/filter.pipe';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { BookStoreService } from '../../services/book-store.service';

@Component({
  selector: 'app-comptative',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, RouterOutlet],
  templateUrl: './comptative.component.html',
  styleUrl: './comptative.component.css',
})
export class ComptativeComponent {
  searchText: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: BookStoreService
  ) {}

  ngOnInit(): void {
    const remote = this.store.getBooks('comptative') || [];
    this.books = [...this.books, ...remote];
  }

  goToShopingPage(book: any) {
    this.apiService.setBook(book);
    this.router.navigate(['customer/home/religious/shoping']);
  }

  books = [
    {
      title: 'A Modern Approach to Verbal & Non-Verbal Reasoning',
      author: 'R.S. Aggarwal',
      price: 550,
      currency: 'Rupees only',
      image: 'books/img (22).jpg',
    },
    {
      title: 'Objective General English',
      author: 'S.P. Bakshi',
      price: 300,
      currency: 'Rupees only',
      image: 'books/img (23).jpg',
    },
    {
      title: 'Indian Economy',
      author: 'Ramesh Singh',
      price: 720,
      currency: 'Rupees only',
      image: 'books/img (24).jpg',
    },
    {
      title: 'History of Modern India',
      author: 'Bipan Chandra',
      price: 350,
      currency: 'Rupees only',
      image: 'books/img (25).jpg',
    },
    {
      title: 'General Science',
      author: 'Lucent Publications',
      price: 320,
      currency: 'Rupees only',
      image: 'books/img (26).jpg',
    },

    {
      title: 'Competitive Exam Book 1',
      author: 'Author 1',
      price: 500,
      image: 'assets/images/comp1.jpg',
    },
    {
      title: 'Competitive Exam Book 2',
      author: 'Author 2',
      price: 600,
      image: 'assets/images/comp2.jpg',
    },
  ];
}
