// src/app/pages/services-page/services-page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CtaSection } from '../../cta-section/cta-section'; // <-- 1. Import CTA

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    CommonModule, // For *ngFor
    RouterLink,
    CtaSection  // <-- 2. Add CTA to imports
  ],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

  // --- Data for Section 1: Medical Record Retrieval ---
  mrrIncludes = [
    'Dedicated liaison agents trained in HIPAA',
    'Multi-level validation handling',
    'Encrypted delivery through secure portals',
    'Full audit trail and reporting on all requests'
  ];
  mrrWhy = [
    'Turnaround times as low as 24-72 hours',
    'Strict adherence to protocols',
    'A user-intuitive team supporting behind the scenes',
    'Tailored service levels for bulk requests'
  ];

  // --- Data for Section 2: Release of Information ---
  roiIncludes = [
    'Verification of all incoming authorizations',
    'Handling of all subpoenas and legal documents',
    'Secure logging and reporting for every request'
  ];
  roiWhy = [
    'Systems compliant with ICO and all UK data standards',
    '24/7 client support from India',
    'Lower costs without compromising security',
    'Fully documented audit logs and support'
  ];

  // --- Data for Section 3: Healthcare Staffing ---
  staffingIncludes = [
    'Medical coders (CCS-P, CPC, HCC, etc.)',
    'Virtual medical scribes',
    'Source-to-you management (SCM) tool',
    'RCM processing agents',
    'Healthcare virtual assistants and admin staff'
  ];
  staffingWhy = [
    'UK-based leadership with operational control from India',
    'Full data security protocols and performance monitoring',
    'Flexible contracts - hourly, monthly, or project-based',
    'Affordable, scalable, and highly reliable secure pool'
  ];

}