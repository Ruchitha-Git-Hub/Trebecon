import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environment';
const apiUrl = environment.apiUrl;
const token = environment.bearerToken;
type FormField = 'name' |   'email' | 'message';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showBackToTop = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Show back-to-top button when user scrolls down 300px
    this.showBackToTop = window.pageYOffset > 300;
  }
  formData: Record<FormField, string> = {
    name: '',
     
    email: '',
    message: ''
  };
  formErrors: Record<FormField, string> = {
    name: '',
     
    email: '',
    message: ''
  };
  errorMessage = '';
  formSubmitted = false;
   successMessage = '';

   constructor(private http: HttpClient, private router: Router) { }

   navigateAndScrollToTop(route: string) {
     this.router.navigate([route]).then(() => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
     });
   }

   navigateWithFragment(route: string, fragment: string) {
     this.router.navigate([route], { fragment: fragment }).then(() => {
       setTimeout(() => {
         const element = document.getElementById(fragment);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         }
       }, 100);
     });
   }

   clearError(field: FormField) {
        
       this.formErrors[field] = '';
       if (!this.formData.name.match(/^[a-zA-Z\s]+$/) && this.formData.name) {
          
         this.formErrors.name = 'Name must contain only letters and spaces.';
       }
        
       if (this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          
         this.formErrors.email = 'Email is not valid.';
       }
   
     }
   
     onSubmit() {
       let count = 0;
       if (!this.formData.name) {
         count++;
         this.formErrors.name = 'Name is required.';
       }
   
        
       if (!this.formData.email) {
         count++;
         this.formErrors.email = 'Email is required.';
       }
       if (!this.formData.message) {
         count++;
         this.formErrors.message = 'Message is required.';
       }
   
       if (!this.formData.name.match(/^[a-zA-Z\s]+$/) && this.formData.name) {
         count++;
         this.formErrors.name = 'Name must contain only letters and spaces.';
       }
       
       if (this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
         count++;
         this.formErrors.email = 'Email is not valid.';
       }
   
       if (count > 0) {
         return;
       }
   
       this.formSubmitted = true;
       this.errorMessage = '';
       this.successMessage = '';
       const formData = {
         name: this.formData.name,
         
         email: this.formData.email,
         message: this.formData.message
       };
        
       const headers = new HttpHeaders({
         'Authorization': `${token}`,
         'Content-Type': 'application/json'
       });
   
       
       this.http.post(apiUrl + '/api/contact-form/', formData,  { headers }).subscribe({
         next: (response) => {
           this.formData = {
             name: '',
              
             email: '',
             message: ''
           };
   
           this.formErrors = {
             name: '',
              
             email: '',
             message: ''
           };
           console.log('Form submitted successfully:', response);
           this.formSubmitted = false;
            this.successMessage = "Your details submitted successfully.";
         },
         error: (error) => {
           this.errorMessage = error.error.message || 'There was an error sending your message. Please try again later.';
           // Handle error response
           console.error('Error submitting form:', error);
           // this.errorMessage = 'There was an error sending your message. Please try again later.';
         }
       });
   
     }
       navigateToIndustry(): void {
    // Smooth scroll to top of the current page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
