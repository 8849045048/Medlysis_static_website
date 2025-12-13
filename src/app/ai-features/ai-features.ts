import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-features.html',
  styleUrl: './ai-features.css'
})
export class AiFeaturesComponent {
  features = [
    {
      title: 'Automated Metadata Extraction',
      description: 'AI identifies provider names, dates, TINs, specialties, and key information instantly.',
      icon: 'bi-file-earmark-text'
    },
    {
      title: 'Smart OCR + NLP Processing',
      description: 'Converts handwritten or scanned documents into searchable, structured data.',
      icon: 'bi-cpu'
    },
    {
      title: 'Intelligent Document Prioritization',
      description: 'Urgent, case-critical documents are flagged automatically for faster delivery.',
      icon: 'bi-lightning-charge'
    },
    {
      title: 'AI-Powered Matching System',
      description: 'Ensures the request reaches the right provider the first time — reducing rework.',
      icon: 'bi-check-circle'
    },
    {
      title: 'Compliance-Safe AI',
      description: 'HIPAA-aligned & GDPR-compliant automated workflows.',
      icon: 'bi-shield-check'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor retrieval status and get instant updates on your requests.',
      icon: 'bi-clock-history'
    }
  ];
}