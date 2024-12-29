import { Component, Input } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { NgClass } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from 'app/themeService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ThemeComponent,
    MetamaskComponent,
    NgClass,
    RouterModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDisabled: boolean = true;  // This can be dynamically set based on your conditions
  theme: string =""; 

  lightLogo = 'p2p-high-resolution-logo-transparent.png';
  darkLogo = 'p2p-high-resolution-logo-black-transparent.png';
  
  constructor(private router: Router, private themeService: ThemeService) {
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
    });
  } 
  
  get logoSrc(): string {
    return this.theme === 'light' ? this.darkLogo : this.lightLogo;
  }
  get toggleTheme(): string {
    return this.theme === 'light' ? 'dark' : 'light';
  }
}
