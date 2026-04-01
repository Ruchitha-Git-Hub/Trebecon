import { AfterViewInit,Component } from '@angular/core';
import { FaqComponent } from '../../faq/faq.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from './../../../environment';
import { HostListener } from '@angular/core';

const apiUrl = environment.apiUrl;
const token = environment.bearerToken;

type FormField =  'email' | 'password' 
declare let $: any;


@Component({
  selector: 'app-client-portal',
  standalone: true,
  imports: [FaqComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './client-portal.component.html',
  styleUrl: './client-portal.component.css'
})
export class ClientPortalComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}
  formData: Record<FormField, string> = {
    
    email: '',
    password: ''
     
  };

  formErrors: Record<FormField, string> = {
    
    email: '',
    password: ''
     
  };
  errorMessage = '';
  formSubmitted = false;
  successMessage = '';
  clearError  (field: FormField) {
    this.formErrors[field] = '';
  

  }
  onSubmit (){
    let count = 0;
    if (!this.formData.email) {
      this.formErrors.email = 'Email is required.';
      count++;
    }
    if (!this.formData.password) {
      this.formErrors.password = 'Password is required.';
      count++;
    }
    if (count > 0) {
      return;
    }
    this.formSubmitted = true;
    this.errorMessage = '';
    this.successMessage = '';
    const payload = {
      
      
      username: this.formData.email,
      password: this.formData.password
    };
    const headers = new HttpHeaders({
          'Authorization': token,
          'Content-Type': 'application/json'
        });
        this.http.post(apiUrl + '/api/user-login/', payload, { headers }).subscribe({
      next: (response:any) => {
        // Reset form
        this.formData = {
          
           
          email: '',
          password: '',
          
        };
        this.formErrors = {
          email: '',
          password: ''
          
        };
        console.log('Form submitted successfully:', response);
        this.successMessage = response?.message;
        this.formSubmitted = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'There was an error sending your message. Please try again later.';
        console.error('Error submitting form:', error);
        this.formSubmitted = false;
      }
    });
  }
  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  }
}
