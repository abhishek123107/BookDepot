import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../educational/filter.pipe';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-religious',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe,RouterOutlet],
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.css']
})
export class ReligiousComponent {

  searchText:string = '';

  constructor(private router:Router , private apiService:ApiService){}

  ngOnInit():void{}

  goToShopingPage(book: any){
     this.apiService.setBook(book);
     this.router.navigate(['customer/home/religious/shoping']);
  }

  books:any[]=[
    { title:'Bhagavad Gita', author:'Ved Vyasa', price:199, currency:'Rupees only', image:'books/img (40).jpg' },
  { title:'Ramayana', author:'Valmiki', price:250, currency:'Rupees only', image:'books/img (41).jpg' },
  { title:'Mahabharata', author:'Ved Vyasa', price:299, currency:'Rupees only', image:'books/img (42).jpg' },
  { title:'Upanishads', author:'Various', price:220, currency:'Rupees only', image:'books/img (43).jpg' },
  { title:'Bhagavata Purana', author:'Vyasa', price:300, currency:'Rupees only', image:'books/img (44).jpg' },
  { title:'Yoga Sutras of Patanjali', author:'Patanjali', price:350, currency:'Rupees only', image:'books/img (45).jpg' },
  { title:'Ramcharit-manas', author:'Tulsidas', price:199, currency:'Rupees only', image:'books/img (46).jpg' },
  { title:'Shiva Purana', author:'Various', price:280, currency:'Rupees only', image:'books/img (47).jpg' },
  { title:'Bhakti Sagar', author:'Swami Sivananda', price:250, currency:'Rupees only', image:'books/img (48).jpg' },
  { title:'Gita Press Publications Collection', author:'Gita Press', price:499, currency:'Rupees only', image:'books/img (39).jpg' },

  ]
}
