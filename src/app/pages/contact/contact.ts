import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_name: 'Medlysis Team'
      };

      try {
        await emailjs.send(
          'service_ifncfo3',     // Your Real Service ID
          'template_7b4zeyl',    // Your Real Template ID
          templateParams,
          'S4Hz3YxuOT4gitmov'    // Your Real Public Key
        );

        alert('Message Sent Successfully! We will contact you shortly.');
        this.contactForm.reset();

      } catch (error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      }

    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}