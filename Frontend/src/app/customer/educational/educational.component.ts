import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-educational',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, RouterOutlet],
  templateUrl: './educational.component.html',
  styleUrl: './educational.component.css'
})
export class EducationalComponent {

  private apiUrl = 'https://127.0.0.1  800:/educational';

  myClassName: string = 'bg-primary';

  searchText:string = '';



  

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

addBook(book: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, book);
}

constructor(private router:Router , private apiService:ApiService, private http: HttpClient){}

  ngOnInit():void{}

  goToShopingPage(book: any){
     this.apiService.setBook(book);
     this.router.navigate(['customer/home/religious/shoping']);
  }

 books = [
  { title:'Lucent’s General Knowledge', author:'Dr. Binay Karna', price:350, currency:'Rupees only',image:'books/img (28).jpg' },
  { title:'Manorama Yearbook', author:'Mammen Mathew', price:350, currency:'Rupees only', image:'books/img (29).jpg' },
  { title:'Quantitative Aptitude', author:'R.S. Aggarwal', price:600, currency:'Rupees only', image:'books/img (30).jpg' },
  { title:'Fast Track Objective Arithmetic', author:'Rajesh Verma', price:550, currency:'Rupees only', image:'books/img (31).jpg' },
  { title:'Word Power Made Easy', author:'Norman Lewis', price:250, currency:'Rupees only', image:'books/img (32).jpg' },
  { title:'High School English Grammar & Composition', author:'Wren & Martin', price:300, currency:'Rupees only', image:'books/img (33).jpg' },
  { title:'Concepts of Physics', author:'H.C. Verma', price:650, currency:'Rupees only', image:'books/img (34).jpg' },
  { title:'India’s Struggle for Independence', author:'Bipan Chandra', price:400, currency:'Rupees only', image:'books/img (8).jpg' },
  { title:'Indian Polity', author:'M. Laxmikanth', price:750, currency:'Rupees only', image:'books/img (35).jpg' },
  {
      title:'angular for beginner',
      author:'john deo',
      price:'499',
      image: 'assets/images/angular-book.jpg'   
    },
    {
      title:'TypeScript',
      author:'jane smith',
      price:'499',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'Javascript',
      author:'jane smith',
      price:'499',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'Java',
      author:'Vergil Silva',
      price:'299',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'Python',
      author:'Kaif Abbas',
      price:'199',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'C Programming',
      author:'Jon Erickson',
      price:'599',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'C#',
      author:'Eric Vargas',
      price:'259',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'C++',
      author:'Mr Govindraj',
      price:'199',
      image:'assets/images/ts-book.jpg'
    },
    {
      title:'Data Structures With Java',
      author:' Cray S. Harstmann',
      price:'499',
      image:'assets/images/ts-book.jpg'
    }

   
  ];

}
