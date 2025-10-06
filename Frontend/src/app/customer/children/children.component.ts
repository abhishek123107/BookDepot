import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FilterPipe } from '../educational/filter.pipe';
import { ApiService } from '../../services/api.service';
import { BookStoreService } from '../../services/book-store.service';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, FilterPipe],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css',
})
export class ChildrenComponent {
  searchText: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: BookStoreService
  ) {}

  ngOnInit(): void {
    const remote = this.store.getBooks('children') || [];
    this.books = [...this.books, ...remote];
  }

  goToShopingPage(book: any) {
    this.apiService.setBook(book);
    this.router.navigate(['customer/home/religious/shoping']);
  }

  books: any[] = [
    {
      title: 'The Blue Umbrella',
      author: 'Ruskin Bond',
      price: 150,
      currency: 'Rupees only',
      image: 'books/img (11).jpg',
    },
    {
      title: 'Grandma’s Bag of Stories',
      author: 'Sudha Murty',
      price: 199,
      currency: 'Rupees only',
      image: 'books/img (12).jpg',
    },
    {
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle',
      price: 180,
      currency: 'Rupees only',
      image: 'books/img (13).jpg',
    },
    {
      title: 'Amma, Tell Me About…',
      author: 'Bhakti Mathur',
      price: 250,
      currency: 'Rupees only',
      image: 'books/img (14).jpg',
    },
    {
      title: 'The Magic of the Lost Temple',
      author: 'Sudha Murty',
      price: 220,
      currency: 'Rupees only',
      image: 'books/img (15).jpg',
    },
    {
      title: 'Matilda',
      author: 'Roald Dahl',
      price: 300,
      currency: 'Rupees only',
      image: 'books/img (16).jpg',
    },
    {
      title: 'Harry Potter and the Philosopher’s Stone',
      author: 'J.K. Rowling',
      price: 450,
      currency: 'Rupees only',
      image: 'books/img (17).jpg',
    },
    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      price: 280,
      currency: 'Rupees only',
      image: 'books/img (18).jpg',
    },
    {
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      price: 200,
      currency: 'Rupees only',
      image: 'books/img (19).jpg',
    },
    {
      title: 'Swami and Friends',
      author: 'R.K. Narayan',
      price: 250,
      currency: 'Rupees only',
      image: 'books/img (20).jpg',
    },
    {
      title: 'Percy Jackson and the Olympians: The Lightning Thief',
      author: 'Rick Riordan',
      price: 399,
      currency: 'Rupees only',
      image: 'books/img (21).jpg',
    },
  ];
}
