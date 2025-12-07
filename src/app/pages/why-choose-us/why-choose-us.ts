// src/app/pages/why-choose-us/why-choose-us.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- 1. IMPORT RouterLink

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [
    CommonModule, // <-- 2. ADD CommonModule
    RouterLink    // <-- 3. ADD RouterLink
  ],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css'
})
export class WhyChooseUs {

  // 4. This array holds the 6 features from your screenshot
  features = [
    {
      icon: 'bi-shield-check',
      title: 'UK-Registered for Trust and Transparency',
      description: 'Our UK governance ensures stringent adherence to regulatory standards, offering reliability and transparent governance.'
    },
    {
      icon: 'bi-people-fill',
      title: 'India-Based Team for Operational Efficiency',
      description: 'Leveraging dedicated teams in India, we deliver cost-effective, high-quality 24/7 support with unmatched scalability.'
    },
    {
      icon: 'bi-headset',
      title: 'End-to-End support with Clear SLAs',
      description: 'We offer comprehensive support across all our services, backed by clear Service Level Agreements (SLAs).'
    },
    {
      icon: 'bi-file-earmark-lock-fill',
      title: 'Compliant and Secure Operations',
      description: 'HIPAA compliance is at the heart of our operations, ensuring secure data handling and regulatory adherence.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Scalable Solutions for Growth',
      description: 'Our services are designed to grow with your needs, from supporting a small practice to a large healthcare system.'
    },
    {
      icon: 'bi-person-check-fill',
      title: 'Client-First Approach',
      description: 'We prioritize understanding your unique challenges, collaborating closely to co-create solutions that work.'
    }
  ];

}