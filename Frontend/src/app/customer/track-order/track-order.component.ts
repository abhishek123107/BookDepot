import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookImageService } from '../../services/book-image.service';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css'],
})
export class TrackOrderComponent implements OnInit {
  order: any = null;
  orderId: string = '';
  statusMessage: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public router: Router,
    private bookImage: BookImageService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';
    if (this.orderId) {
      this.fetchOrder();
    } else {
      this.statusMessage = 'No order ID provided.';
    }
  }

  fetchOrder() {
    this.http
      .post<any>('http://127.0.0.1:8000/api/order/get/', {
        order_id: this.orderId,
      })
      .subscribe(
        (res) => {
          if (res.success && res.order) {
            this.order = res.order;
            // ensure image present for the order's book
            if (
              this.order.book &&
              (!this.order.book.image || this.order.book.image.trim() === '')
            ) {
              const img = this.bookImage.getImageForTitle(
                this.order.book.title
              );
              if (img) this.order.book.image = img;
            }
          } else {
            this.statusMessage = 'Order not found.';
          }
        },
        (err) => {
          this.statusMessage = 'Error fetching order.';
        }
      );
  }
}
