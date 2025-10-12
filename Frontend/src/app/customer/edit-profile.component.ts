import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: any;
  private updateProfileUrl = 'http://127.0.0.1:8000/api/user/update-profile/';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private storage: BrowserStorageService
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    const storedUser = this.storage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.profileForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address,
      });
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedData = this.profileForm.value;
      updatedData.id = this.user.id;
      this.http
        .post<any>(this.updateProfileUrl, updatedData)
        .subscribe((res) => {
          if (res.success) {
            this.storage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(['/profile']);
          }
        });
    }
  }
}
