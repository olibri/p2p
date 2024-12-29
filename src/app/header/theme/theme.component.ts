import { Component, OnInit, Renderer2, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from 'app/themeService'; 

@Component({
  selector: 'app-theme',
  standalone: true,
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit  {
  @Output() themeChange = new EventEmitter<string>();

  theme: string = 'dark'; // Default theme

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // ngOnInit() {
  //   this.emitThemeChange();
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.renderer.addClass(document.body, this.theme);
  //   }
  // }
  ngOnInit() {
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.setAttribute(document.body, 'class', this.theme);
      }
    });
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.themeService.setTheme(newTheme);
    }
  }
  // toggleTheme() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.theme = this.theme === 'light' ? 'dark' : 'light';
  //     this.renderer.setAttribute(document.body, 'class', this.theme);
  //     this.emitThemeChange();
  //   }
  // }
  private emitThemeChange() {
    if (isPlatformBrowser(this.platformId)) {
      this.themeChange.emit(this.theme);
    }
  }
}