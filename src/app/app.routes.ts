// src/app.routes.ts
import { Routes } from '@angular/router';

// Import your new page components
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesPage } from './pages/services-page/services-page';
import { Contact } from './pages/contact/contact';
import { WhyChooseUs } from './pages/why-choose-us/why-choose-us'; // <-- ADD THIS

export const routes: Routes = [
  // When someone visits the main URL, show the Home page
  { path: '', component: Home },

  // When someone visits /about, show the About page
  { path: 'about', component: About },

  // When someone visits /services, show the Services page
  { path: 'services', component: ServicesPage },

  // When someone visits /why-choose-us, show this new page
  { path: 'why-choose-us', component: WhyChooseUs }, // <-- ADD THIS

  // When someone visits /contact, show the Contact page
  { path: 'contact', component: Contact },

  // Redirect any other path back to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];