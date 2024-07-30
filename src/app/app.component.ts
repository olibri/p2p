import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { MatButtonModule } from '@angular/material/button';
import { ThemeToggleButtonComponent } from './theme-toggle-button/theme-toggle-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    RouterOutlet, 
    ThemeComponent,
    MatButtonModule,
    ThemeToggleButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NFT';
}
