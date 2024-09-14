import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { OnlineMarketComponent } from './online-market/online-market.component';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    RouterOutlet, 
    MatButtonModule,
    HeaderComponent,
    CommonModule,
    OnlineMarketComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2p';
}
