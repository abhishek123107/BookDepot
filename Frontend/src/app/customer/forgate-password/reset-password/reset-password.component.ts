import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // API call to Django
  resetPassword(email: string, new_password: string): Observable<any> {
    const url = `${environment.apiUrl.replace(
      /\/api\/?$/,
      ''
    )}/reset-password/`;
    // The reset-password endpoint is often outside the /api prefix; ensure we strip a trailing /api if present
    return this.http.post<any>(url, { email, new_password });
  }

  // Form submit handler
  onSubmit(event?: Event) {
    if (event) event.preventDefault(); // prevent default form GET
    if (this.resetForm.invalid) return;

    const { email, new_password } = this.resetForm.value;

    this.resetPassword(email, new_password).subscribe({
      next: (res) => {
        if (res.success) {
          alert('✅ Password reset successful!');
          this.router.navigate(['/login']); // redirect to login
        } else {
          alert('❌ ' + (res.message || 'Reset failed!'));
        }
      },
      error: (err) => {
        console.error('Reset Password API Error:', err);
        alert('❌ Error resetting password!');
      },
    });
  }
}
