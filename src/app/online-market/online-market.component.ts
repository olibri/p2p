import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'app/ThemeService';

@Component({
  selector: 'app-online-market',
  standalone: true,
  imports: [
    NgClass,
    
  ],
  templateUrl: './online-market.component.html',
  styleUrl: './online-market.component.css'
})
export class OnlineMarketComponent implements OnInit  {
  theme: string ="";
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
    });
  }

  get toggleTheme(): string {
    return this.theme === 'light' ? 'dark' : 'light';
  }
}
