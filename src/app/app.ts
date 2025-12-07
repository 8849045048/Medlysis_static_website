import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Import Header
// Make sure the class name in header.ts is 'HeaderComponent'
import { HeaderComponent } from './header/header';

// 2. Import Footer
// Make sure the class name in footer.ts is 'Footer' (based on your previous code)
import { Footer } from './footer/footer';

// 3. Import Preloader
// Make sure the class name in preloader.ts is 'PreloaderComponent'
import { PreloaderComponent } from './preloader/preloader';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Footer,
    PreloaderComponent // Add Preloader here
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-medlysis-app');

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }
}