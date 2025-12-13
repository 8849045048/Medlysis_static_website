import { Component } from '@angular/core';

// Import all your sections
import { Hero } from '../../hero/hero';
import { Services } from '../../services/services';
import { Operations } from '../../operations/operations';
import { Testimonials } from '../../testimonials/testimonials';
import { CtaSection } from '../../cta-section/cta-section';

// Import the AI Component
import { AiFeaturesComponent } from '../../ai-features/ai-features';

@Component({
  selector: 'app-home',
  standalone: true,
  // Add all sections to the imports array
  imports: [
    Hero,
    Services,
    Operations,
    Testimonials,
    CtaSection,
    AiFeaturesComponent // <--- THIS IS THE FIX. It must be in this list.
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Logic for the home page (if any) goes here
}