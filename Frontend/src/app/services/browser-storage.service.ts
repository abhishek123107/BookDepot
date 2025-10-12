import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserStorageService {
  isBrowser(): boolean {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch (e) {
      return false;
    }
  }

  getItem(key: string): string | null {
    if (!this.isBrowser()) return null;
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  setItem(key: string, value: string) {
    if (!this.isBrowser()) return;
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  }

  removeItem(key: string) {
    if (!this.isBrowser()) return;
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }
}
