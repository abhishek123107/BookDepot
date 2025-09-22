import { EmailValidator } from "@angular/forms";

export interface Book {
  title: string;
  author: string;
  price: number;
  image?: string;
}

export interface Order {
  book: Book;          // Full book object
  customer_name: string;
  email: string,
  address: string;
  state: string;
  district: string;
  pin: string;
  landmark?: string;
  phone: string;
}

    