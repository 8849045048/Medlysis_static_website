import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// REMOVED 'Operations' import because we pasted the HTML directly into about.html

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  complianceItems = [
    'HIPAA Compliant Processes',
    'ICO Registered (UK Data Protection)',
    'Staff-to-Client Data Segregation',
    'Secure Data Handling Protocols',
    'Regular Compliance Audits',
    'Staff Trained in Data Privacy'
  ];

}