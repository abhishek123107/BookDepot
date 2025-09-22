import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../educational/filter.pipe';

@Component({
  selector: 'app-libarary',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterPipe, FormsModule],
  templateUrl: './libarary.component.html',
  styleUrl: './libarary.component.css'
})
export class LibararyComponent {


  

  searchText = '';

   isOpen = false;
   dropbtn = ' ☰ ';
   btnText = '▼';

   toggleDropdown(){
    this.isOpen = !this.isOpen;
    this.dropbtn = this.isOpen ? '×' : '☰ ';
   }

   isChildrenBooks = false;
   onClick(){
    this.isChildrenBooks = !this.isChildrenBooks;
    this.btnText = this.isChildrenBooks ? '▲' : '▼';
   }


   
   books = [
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
     {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
      {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     },
      {
       title: 'Angular Basics',
       author: 'John Doe',
       pdf: '/Angular.pdf'
     }
   ];
 bookCategory: string [] = ['Select Category','Academic/Educational','Literature & Fiction','Non-Fiction','Fiction','Religious & Spiritual','Childrens','Hobbies & Skill Development'];
}
