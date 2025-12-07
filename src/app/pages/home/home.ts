// src/app/pages/home/home.ts
import { Component } from '@angular/core';

// Import all your sections
import { Hero } from '../../hero/hero';
import { Services } from '../../services/services';
import { Stats } from '../../stats/stats';
import { Operations } from '../../operations/operations';
// --- ADD THESE NEW IMPORTS ---
import { Testimonials } from '../../testimonials/testimonials';
import { CtaSection } from '../../cta-section/cta-section';
// --- END NEW IMPORTS ---

@Component({
  selector: 'app-home',
  standalone: true,
  // Add all sections to the imports array
  imports: [
    Hero,
    Services,
    Stats,
    Operations,
    // --- ADD THESE NEW COMPONENTS ---
    Testimonials,
    CtaSection
    // --- END NEW COMPONENTS ---
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // This is your new Home Page!
}