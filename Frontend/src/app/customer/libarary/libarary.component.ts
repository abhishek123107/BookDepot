import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../educational/filter.pipe';

@Component({
  selector: 'app-libarary',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterPipe, FormsModule],
  templateUrl: './libarary.component.html',
  styleUrl: './libarary.component.css',
})
export class LibararyComponent {
  searchText = '';

  isOpen = false;
  dropbtn = ' ☰ ';
  btnText = '▼';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.dropbtn = this.isOpen ? '×' : '☰ ';
  }

  isChildrenBooks = false;
  onClick() {
    this.isChildrenBooks = !this.isChildrenBooks;
    this.btnText = this.isChildrenBooks ? '▲' : '▼';
  }

  // Books organized by category
  booksByCategory: {
    [key: string]: Array<{ title: string; author: string; pdf?: string }>;
  } = {
    'Academic/Educational': [
      { title: 'Angular Basics', author: 'John Doe', pdf: '/Angular.pdf' },
      { title: 'Data Structures', author: 'Jane Smith' },
    ],
    'Literature & Fiction': [
      { title: 'Pride and Prejudice', author: 'Jane Austen' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    ],
    'Non-Fiction': [{ title: 'Sapiens', author: 'Yuval Noah Harari' }],
    Fiction: [{ title: 'The Alchemist', author: 'Paulo Coelho' }],
    'Religious & Spiritual': [{ title: 'Bhagavad Gita', author: 'Vyasa' }],
    Childrens: [{ title: "Charlotte's Web", author: 'E. B. White' }],
    'Hobbies & Skill Development': [
      { title: 'Photography 101', author: 'Alex Lens' },
    ],
  };

  bookCategory: string[] = [
    'Academic/Educational',
    'Literature & Fiction',
    'Non-Fiction',
    'Fiction',
    'Religious & Spiritual',
    'Childrens',
    'Hobbies & Skill Development',
  ];

  selectedSection: string = 'Academic/Educational';

  // Model for add-book form
  newTitle: string = '';
  newAuthor: string = '';
  newPdf: string = '';
  // Local file selected by user (not uploaded to server in this demo)
  newLocalFile: File | null = null;
  // Object URL for previewing a selected local PDF
  previewPdfUrl: string | null = null;
  // Pre-bundled/system PDFs available in public folder
  availablePdfs: string[] = ['/Angular.pdf'];
  selectedLibraryPdf: string = this.availablePdfs[0];

  get currentBooks() {
    return this.booksByCategory[this.selectedSection] || [];
  }

  selectSection(section: string) {
    this.selectedSection = section;
    this.isOpen = false;
  }

  addBook() {
    const title = (this.newTitle || '').trim();
    const author = (this.newAuthor || '').trim();
    if (!title || !author) {
      alert('Please provide both title and author');
      return;
    }
    // Determine pdf URL priority: local selected file > chosen library pdf > manual URL
    let pdfUrl: string | undefined = undefined;
    if (this.newLocalFile) {
      // create object URL for demo preview (not persisted to server)
      try {
        if (this.previewPdfUrl) {
          URL.revokeObjectURL(this.previewPdfUrl);
        }
      } catch (e) {}
      this.previewPdfUrl = URL.createObjectURL(this.newLocalFile);
      pdfUrl = this.previewPdfUrl;
    } else if (this.selectedLibraryPdf) {
      pdfUrl = this.selectedLibraryPdf;
    } else if (this.newPdf && this.newPdf.trim()) {
      pdfUrl = this.newPdf.trim();
    }

    const entry = { title, author, pdf: pdfUrl };
    if (!this.booksByCategory[this.selectedSection]) {
      this.booksByCategory[this.selectedSection] = [];
    }
    this.booksByCategory[this.selectedSection].push(entry);
    this.newTitle = '';
    this.newAuthor = '';
    this.newPdf = '';
    this.newLocalFile = null;
    // keep previewPdfUrl available for viewing the added book; do not revoke immediately
    alert(`Book added to ${this.selectedSection}`);
  }

  onPdfSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.newLocalFile = null;
      return;
    }
    this.newLocalFile = input.files[0];
    // create preview URL (revoked next time a file is selected)
    if (this.previewPdfUrl) {
      try {
        URL.revokeObjectURL(this.previewPdfUrl);
      } catch (e) {}
    }
    this.previewPdfUrl = URL.createObjectURL(this.newLocalFile);
  }
}
