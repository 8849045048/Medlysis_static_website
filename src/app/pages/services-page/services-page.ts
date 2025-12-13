import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CtaSection } from '../../cta-section/cta-section';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CtaSection
  ],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

  // MRR Data
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

  // ROI Data
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

  // Staffing Data
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