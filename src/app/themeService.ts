// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: BehaviorSubject<string> = new BehaviorSubject('dark'); 

  setTheme(theme: string) {
    this.theme.next(theme);
  }

  getTheme() {
    return this.theme.asObservable();
  }
}
