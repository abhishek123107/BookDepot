import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../educational/filter.pipe';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { BookStoreService } from '../../services/book-store.service';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, RouterOutlet],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css',
})
export class HobbiesComponent {
  searchText: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: BookStoreService
  ) {}

  ngOnInit(): void {
    const remote = this.store.getBooks('hobbies') || [];
    this.books = [...this.books, ...remote];
  }

  goToShopingPage(book: any) {
    this.apiService.setBook(book);
    this.router.navigate(['customer/home/religious/shoping']);
  }

  books: any[] = [
    {
      title: 'Creative Painting for Kids',
      author: 'Neetu Sugandh',
      price: 299,
      currency: 'Rupees only',
      image: 'books/img (36).jpg',
    },
    {
      title: '365 Things to Make and Do',
      author: 'Usborne Activities',
      price: 450,
      currency: 'Rupees only',
      image: 'books/img (37).jpg',
    },
    {
      title: 'Origami for Beginners',
      author: 'Taro Yaguchi',
      price: 350,
      currency: 'Rupees only',
      image: 'books/img (38).jpg',
    },
    {
      title: 'The Digital Photography Book',
      author: 'Scott Kelby',
      price: 799,
      currency: 'Rupees only',
      image: 'books/img (39).jpg',
    },
    {
      title: 'Read This If You Want to Take Great Photographs',
      author: 'Henry Carroll',
      price: 599,
      currency: 'Rupees only',
      image: 'books/img (40).jpg',
    },
    {
      title: 'The Guitar Handbook',
      author: 'Ralph Denyer',
      price: 950,
      currency: 'Rupees only',
      image: 'books/img (41).jpg',
    },
    {
      title: 'Piano Adventures (Series)',
      author: 'Nancy & Randall Faber',
      price: 1200,
      currency: 'Rupees only',
      image: 'books/img (42).jpg',
    },
    {
      title: 'The Complete Garden Flower Book',
      author: 'Catriona Tudor Erler',
      price: 700,
      currency: 'Rupees only',
      image: 'books/img (43).jpg',
    },
    {
      title: 'Kitchen Gardening Made Easy',
      author: 'Deepa Varadarajan',
      price: 399,
      currency: 'Rupees only',
      image: 'books/img (44).jpg',
    },
    {
      title: 'MasterChef Cookbook (India Edition)',
      author: 'MasterChef India Chefs',
      price: 850,
      currency: 'Rupees only',
      image: 'books/img (45).jpg',
    },
    {
      title: 'DIY Crafts for Everyone',
      author: 'Step-by-Step Hobby Guide',
      price: 499,
      currency: 'Rupees only',
      image: 'books/img (46).jpg',
    },
    {
      title: 'The Young Champion’s Mind',
      author: 'Jim Afremow',
      price: 699,
      currency: 'Rupees only',
      image: 'books/img (47).jpg',
    },
    {
      title: 'Yoga for Beginners',
      author: 'Swami Satyananda Saraswati',
      price: 399,
      currency: 'Rupees only',
      image: 'books/img (48).jpg',
    },
  ];
}
