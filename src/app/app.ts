// src/app/app.ts

import { Component, signal, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HeaderComponent } from './header/header';
import { Footer } from './footer/footer';
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

  private lenis!: Lenis; // ✅ store lenis as class property

  constructor(private router: Router) {}

  ngOnInit(): void {

    /* 1️⃣ Initialize AOS */
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    /* 2️⃣ Initialize Lenis */
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    /* 3️⃣ Lenis RAF loop */
    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    /* 4️⃣ Scroll to top on route change */
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.lenis.scrollTo(0, { immediate: true });
      });
  }
}
