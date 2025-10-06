import { Injectable } from '@angular/core';

export type CategoryKey =
  | 'educational'
  | 'fiction'
  | 'non-fiction'
  | 'hobbies'
  | 'comptative'
  | 'children'
  | string;

@Injectable({ providedIn: 'root' })
export class BookStoreService {
  private store: Record<CategoryKey, any[]> = {
    educational: [],
    fiction: [],
    'non-fiction': [],
    hobbies: [],
    comptative: [],
    children: [],
  };

  constructor() {
    // initial seeds can be loaded here if desired by copying from existing components
  }

  addBookToCategory(category: CategoryKey, book: any) {
    const key = this.normalizeCategory(category);
    if (!this.store[key]) this.store[key] = [];
    // add id if missing
    if (!book.id) book.id = this.store[key].length + 1;
    this.store[key].push(book);
  }

  getBooks(category: CategoryKey): any[] {
    const key = this.normalizeCategory(category);
    return this.store[key] || [];
  }

  private normalizeCategory(cat: CategoryKey) {
    if (!cat) return 'others';
    return String(cat).toLowerCase().replace(/\s+/g, '-');
  }
}
