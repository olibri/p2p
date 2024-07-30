import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit  {
  private theme: string = 'light'; // Default theme

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, this.theme);
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.renderer.setAttribute(document.body, 'class', this.theme);
    }
  }
}