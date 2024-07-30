import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css'
})
export class ThemeToggleButtonComponent {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.style.backgroundColor = this.isDark ? '#303030' : '#fff';
  }

}
