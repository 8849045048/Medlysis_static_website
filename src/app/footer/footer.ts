// src/app/footer/footer.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Import RouterLink
import { CommonModule } from '@angular/common'; // 2. Import CommonModule (for icons)

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,     // 3. Add RouterLink
    CommonModule    // 4. Add CommonModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}