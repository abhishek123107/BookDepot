import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,

  
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'folder';

  message = '';

constructor(private http: HttpClient) {}

getMessage() {
  this.http.get<{message: string}>('http://127.0.0.1:8000/customer/home').subscribe({
    next: (data) => this.message = data.message,
    error: (error) => {
      console.error('API Error:', error);
      this.message = 'Failed to load message from API';
    }
  });
}
}
