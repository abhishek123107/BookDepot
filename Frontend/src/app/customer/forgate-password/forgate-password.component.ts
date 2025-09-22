import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-forgate-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgate-password.component.html',
  styleUrls: ['./forgate-password.component.css']
})
export class ForgatePasswordComponent {
  forgatePasswordForm: FormGroup;
  otpForm: FormGroup;
  submitted = false;
  otpSent = false;
  message: string = '';
  

  private apiUrl = 'http://127.0.0.1:8000/send-otp/';
  constructor(private fb: FormBuilder, private router:Router, private http: HttpClient, private apiService: ApiService) {
    this.forgatePasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    });
  }

  // Email getter
  get email() {
    return this.forgatePasswordForm.get('email')!;
  }

  // OTP getter
  get otp() {
    return this.otpForm.get('otp')!;
  }

  // Step 1: Send OTP
  onSubmit() {
    this.submitted = true;
    if (this.forgatePasswordForm.invalid) return;

    const emailValue = this.email.value;

    // Call backend API to send OTP
    this.http.post('http://localhost:8000/send-otp/', { email: emailValue }).subscribe({
      next: (res:any) => {
        if(res.success){
          this.message = "OTP sent to " + emailValue;
          this.otpSent = true;
        } else {
          this.message = res.message;
        }
      },
      error: err => {
        this.message = "Error sending OTP!";
      }
    });
  }

  // Step 2: Verify OTP
  verifyOtp() {
    if (this.otpForm.invalid) return;

    const otpValue = this.otp.value;
    const emailValue = this.email.value;

    this.http.post('http://localhost:8000/verify-otp/', { email: emailValue, otp: otpValue }).subscribe({
      next: (res:any) => {
        if(res.success){
          this.router.navigate(['customer/forgatePassword/reset']); // Reset Password page
        } else {
          this.message = "Invalid OTP, try again!";
        }
      },
      error: err => {
        this.message = "Error verifying OTP!";
      }
    });
  }
}
