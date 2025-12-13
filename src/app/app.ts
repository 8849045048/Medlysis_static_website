// src/app/app.ts (Corrected)

import { Component, signal, OnInit } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 

// Import Header
import { HeaderComponent } from './header/header'; 

// Import Footer
import { Footer } from './footer/footer';

// Import Preloader
import { PreloaderComponent } from './preloader/preloader'; 

import AOS from 'aos'; 
import Lenis from 'lenis'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    Footer,
    PreloaderComponent 
  ],
  templateUrl: './app.html', 
  styleUrl: './app.css'     
})
export class App implements OnInit { 
  protected readonly title = signal('my-medlysis-app');

  ngOnInit(): void {
    // 1. Initialize Animations
    AOS.init({
      duration: 800, 
      once: true,    
      offset: 100,   
    }); 

    // 2. Initialize Smooth Scroll (Fixed property name)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', // <--- CHANGED FROM 'direction' TO 'orientation'
      gestureOrientation: 'vertical', // <--- CHANGED FROM 'gestureDirection' TO 'gestureOrientation'
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 3. Connect Lenis loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}