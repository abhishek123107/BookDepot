import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  private apiUrl = 'http://127.0.0.1:8000/api/user/profile/';
  showForm: boolean = false;

  showOrder(){
    this.showForm = !this.showForm;
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  const storedUser = localStorage.getItem("user");
  console.log("Stored user:", storedUser);

  if (!storedUser) {
    console.warn("No user in localStorage, redirecting to login");
    this.router.navigate(['/login']);
    return;
  }

  const parsedUser = JSON.parse(storedUser);
  console.log("Parsed user:", parsedUser);

  // direct id use karo
  const userId = parsedUser.id;
  console.log("User ID:", userId);

  if (!userId) {
    console.warn("User ID missing, redirecting to login");
    this.router.navigate(['/login']);
    return;
  }

  // POST request
  this.http.post<any>(this.apiUrl, { customer_id: userId }).subscribe(
    (res) => {
      console.log("Profile API response:", res);
      if (res.status === "success") {
        this.user = res.user;
      } else {
        this.user = null;
      }
    },
    (error) => {
      console.error("Profile fetch error:", error);
      this.user = null;
    }
  );
 }


  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }



  
}
