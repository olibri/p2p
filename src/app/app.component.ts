import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    RouterOutlet, 
    MatButtonModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2p';
}
