import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private apiUrl = 'http://127.0.0.1:8000/api/login/';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: (res) => {
        if (res.status === "success") {
          localStorage.setItem("user", JSON.stringify(res.user));
           alert("✅ Login successful!");
          this.router.navigate(['/profile']);
        } else {
          alert("❌ " + (res.message || "Login failed!"));
        }
      },
      error: (err) => {
        console.error("Login API Error:", err);
        alert("❌ Error: " + (err.error?.message || "Something went wrong"));
      }
    });
  }
}
