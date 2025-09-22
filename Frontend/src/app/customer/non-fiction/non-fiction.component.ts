import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FilterPipe } from '../educational/filter.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-non-fiction',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,FilterPipe],
  templateUrl: './non-fiction.component.html',
  styleUrl: './non-fiction.component.css'
})
export class NonFictionComponent {

  searchText:string = '';

  constructor(private router:Router , private apiService:ApiService){}
  
    ngOnInit():void{}
  
    goToShopingPage(book: any){
       this.apiService.setBook(book);
       this.router.navigate(['customer/home/religious/shoping']);
    }

  books:any[]=[
  { title:'Wings of Fire', author:'A.P.J. Abdul Kalam', price:299, currency:'Rupees only', image:'books/img (39).jpg' },
  { title:'The Discovery of India', author:'Jawaharlal Nehru', price:350, currency:'Rupees only', image:'books/img (40).jpg' },
  { title:'Autobiography of a Yogi', author:'Paramahansa Yogananda', price:250, currency:'Rupees only', image:'books/img (41).jpg' },
  { title:'India Unbound', author:'Gurcharan Das', price:399, currency:'Rupees only', image:'books/img (42).jpg' },
  { title:'Being Indian', author:'Pavan K. Varma', price:299, currency:'Rupees only', image:'books/img (43).jpg' },
  { title:'The Argumentative Indian', author:'Amartya Sen', price:399, currency:'Rupees only', image:'books/img (44).jpg' },
  { title:'In Spite of the Gods', author:'Edward Luce', price:450, currency:'Rupees only', image:'books/img (45).jpg' },
  { title:'Everybody Loves a Good Drought', author:'P. Sainath', price:320, currency:'Rupees only', image:'books/img (46).jpg' },
  { title:'The Great Indian Novel', author:'Shashi Tharoor', price:350, currency:'Rupees only', image:'books/img (47).jpg' },
  { title:'India After Gandhi', author:'Ramachandra Guha', price:499, currency:'Rupees only', image:'books/img (48).jpg' },
  ]
}
