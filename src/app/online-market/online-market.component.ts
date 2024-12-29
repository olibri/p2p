import { NgClass } from '@angular/common';
import { Component, ViewChild, ViewContainerRef,  OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from 'app/themeService';

@Component({
  selector: 'app-online-market',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './online-market.component.html',
  styleUrl: './online-market.component.css'
})
export class OnlineMarketComponent implements OnInit  {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef | any;
  theme: string ="";
  
  constructor(private themeService: ThemeService,  private router: Router) {}
  

  ngOnInit() {
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
    });
  }

  get toggleTheme(): string {
    return this.theme === 'light' ? 'dark' : 'light';
  }
}
