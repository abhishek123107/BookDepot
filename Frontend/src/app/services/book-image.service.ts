import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookImageService {
  // Map normalized title -> image path inside `public/books/` (or relative path used across app)
  private map: Record<string, string> = {
    'bhagavad gita': 'books/img (40).jpg',
    ramayana: 'books/img (41).jpg',
    mahabharata: 'books/img (42).jpg',
    upanishads: 'books/img (43).jpg',
    'bhagavata purana': 'books/img (44).jpg',
    'yoga sutras of patanjali': 'books/img (45).jpg',
    'ramcharit-manas': 'books/img (46).jpg',
    'shiva purana': 'books/img (47).jpg',
    'bhakti sagar': 'books/img (48).jpg',
    'gita press publications collection': 'books/img (39).jpg',
    // Add additional mappings here as needed for other categories
  };

  constructor() {}

  private normalize(title?: string) {
    if (!title) return '';
    return title.trim().toLowerCase();
  }

  getImageForTitle(title?: string): string {
    const key = this.normalize(title);
    if (!key) return '';
    if (this.map[key]) return this.map[key];

    // fallback: try to match by partial words
    for (const k of Object.keys(this.map)) {
      if (key.includes(k)) return this.map[k];
    }

    // final fallback: empty string (caller should handle default image)
    return '';
  }
}
