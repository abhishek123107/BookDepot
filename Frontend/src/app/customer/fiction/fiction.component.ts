import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FilterPipe } from '../educational/filter.pipe';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-fiction',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,FilterPipe],
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent {


  searchText:string = '';




 books = [
  { title:'Gitanjali', author:'Rabindranath Tagore', price:199, currency:'Rupees only',image:'books/img (2.1).jpg' },
  { title:'Malgudi Days', author:'R.K. Narayan', price:250, currency:'Rupees only', image:'books/img (01).jpg' },
  { title:'Untouchable', author:'Mulk Raj Anand', price:220, currency:'Rupees only', image:'books/img (3).jpg' },
  { title:'Train to Pakistan', author:'Khushwant Singh', price:300, currency:'Rupees only', image:'books/img (4).jpeg' },
  { title:'The God of Small Things', author:'Arundhati Roy', price:350, currency:'Rupees only', image:'books/img (5).jpg' },
  { title:'Midnight’s Children', author:'Salman Rushdie', price:450, currency:'Rupees only', image:'books/img (6).jpg' },
  { title:'A Suitable Boy', author:'Vikram Seth', price:499, currency:'Rupees only', image:'books/img (7).jpg' },
  { title:'The Room on the Roof', author:'Ruskin Bond', price:200, currency:'Rupees only', image:'books/img (8).jpg' },
  { title:'The Inheritance of Loss', author:'Kiran Desai', price:320, currency:'Rupees only', image:'books/img (9).jpg' },
  { title:'The Shadow Lines', author:'Amitav Ghosh', price:280, currency:'Rupees only', image:'books/img (10).jpg' },
  ];


    constructor(private router:Router , private apiService:ApiService){}
    
      ngOnInit():void{}
    
      goToShopingPage(book: any){
         this.apiService.setBook(book);
         this.router.navigate(['customer/home/religious/shoping']);
      }

}
