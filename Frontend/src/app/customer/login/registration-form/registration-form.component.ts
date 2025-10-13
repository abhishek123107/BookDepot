import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  registerForm!: FormGroup;
  submitted = false;
  userList: any[] = [];
  serverErrors: any = {};
  globalError: string = '';
  returnUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z\s]{2,50}$/)],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            // ✅ "Password" → "password"
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        address: ['', [Validators.required, Validators.minLength(5)]],
        role: ['user'],
        // required checkbox to accept terms (template has formControlName="terms")
        terms: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator }
    );

    // read optional returnUrl to redirect after registration
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    // clear previous server errors
    this.serverErrors = {};
    this.globalError = '';

    const data = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password, // ✅ corrected
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
      role: this.registerForm.value.role || 'user',
    };

    this.http
      .post('http://127.0.0.1:8000/api/register/', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (res: any) => {
          console.log('Response:', res);
          alert('✅ Registration successful!');
          // redirect to login (pass returnUrl so login can redirect back to admin if needed)
          const params: any = {};
          if (this.returnUrl) params.returnUrl = this.returnUrl;
          this.router.navigate(['/customer/login'], { queryParams: params });
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error:', err);
          // Try to surface validation errors returned by the server
          const body = err.error || {};
          if (body && body.errors) {
            // server returned serializer errors
            this.serverErrors = body.errors;
          } else if (body && body.message) {
            this.globalError = body.message;
          } else {
            this.globalError = 'Registration failed. Please try again.';
          }
        },
      });
  }

  currentDate: Date = new Date();
}
