import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'folder';

  message = '';

  constructor(private http: HttpClient) {}

  getMessage() {
    const root = environment.apiUrl.replace(/\/api\/?$/, '');
    this.http.get<{ message: string }>(`${root}/customer/home`).subscribe({
      next: (data) => (this.message = data.message),
      error: (error) => {
        console.error('API Error:', error);
        this.message = 'Failed to load message from API';
      },
    });
  }
}
