import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-shoping-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.css']
})
export class ShopingPageComponent {
   
  book: any;
  count: number = 1;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.book = this.apiService.getBook();   // fetch book from service

    if (!this.book) {
      this.book = { title: 'No Book selected', author: '', price: 0, currency: '', image: '' };
    }
  }



  addCart() {
    this.count += 1;
  }

  OrderPage() {
    this.router.navigate(['customer/home/religious/shoping/order']);
  }
}
