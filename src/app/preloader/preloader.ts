import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.html',
  styleUrls: ['./preloader.css']
})
export class PreloaderComponent implements OnInit {
  
  opacity = 1;
  display = 'flex';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      // Check if the page is ALREADY loaded
      if (document.readyState === 'complete') {
        this.hideWithDelay();
      } else {
        // If not, wait for the load event
        window.addEventListener('load', () => {
          this.hideWithDelay();
        });
      }

      // Safety Fallback: Hide after 3 seconds max
      setTimeout(() => {
        this.hidePreloader();
      }, 3000);
    }
  }

  // Helper to ensure you see the preloader for at least 1 second
  hideWithDelay() {
    setTimeout(() => {
      this.hidePreloader();
    }, 1000); 
  }

  hidePreloader() {
    this.opacity = 0;
    setTimeout(() => {
      this.display = 'none';
    }, 500);
  }
}