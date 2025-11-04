import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserStorageService } from '../../services/browser-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  selectedRole: string = 'user';
  returnUrl: string = '';

  private apiUrl = `${environment.apiUrl}/login/`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private storage: BrowserStorageService
  ) {}

  loginUser() {
    const payload = {
      email: this.email,
      password: this.password,
      role: this.selectedRole,
    };

    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          // If server returned a role, prefer that; otherwise use selectedRole
          const userObj = res.user || {};
          if (!userObj.role) userObj.role = this.selectedRole;
          this.storage.setItem('user', JSON.stringify(userObj));
          alert('✅ Login successful!');
          // If admin selected (or server indicates admin), go to admin page
          if (userObj.role === 'admin' || this.selectedRole === 'admin') {
            this.router.navigate(['/admin']);
            return;
          }
          const dest = this.returnUrl || '/customer/profile';
          this.router.navigate([dest]);
        } else {
          alert('❌ ' + (res.message || 'Login failed!'));
        }
      },
      error: (err) => {
        console.error('Login API Error:', err);
        alert('❌ Error: ' + (err.error?.message || 'Something went wrong'));
      },
    });
  }

  ngOnInit(): void {
    // read optional returnUrl query param
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
  }
}
