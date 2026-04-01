import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environment';
const apiUrl = environment.apiUrl;
const token = environment.bearerToken;
type FormField = 'name' | 'phonenumber' | 'email' | 'job_title';
type FormField2 = 'name' | 'phonenumber' | 'email' | 'job_title' | 'resume';
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  
  selectedFile: File | null = null;
  maxFileSize = 2 * 1024 * 1024; // 2MB
  allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  constructor(private http: HttpClient) { }
  showPopup = false;
    errorMessage = '';
  formSubmitted = false;
   successMessage = '';
  openPopup() {
    this.formData = {
      name: '',
      email: '',
      phonenumber: '',

      job_title: ''
    };
    this.formErrors = {
      name: '',
      phonenumber: '',
      email: '',
      resume: '',
      job_title: ''
    };
    this.selectedFile = null;
    this.errorMessage = ''; 
    this.formSubmitted = false;
    this.successMessage = '';
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  formData: Record<FormField, string> = {
    name: '', 
    email: '',
    phonenumber: '', 
    job_title: ''
     
  };
  formErrors: Record<FormField2, string> = {
    name: '',
    phonenumber: '',
    email: '',
    resume: '',
    job_title: ''
  };
  onFileChange = (event:any) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!this.allowedTypes.includes(file.type)) {
        alert('Only PDF or Word documents are allowed.');
        this.selectedFile = null;
        return;
      }
      if (file.size > this.maxFileSize) {
        alert('File size must be less than 2MB.');
        this.selectedFile = null;
        return;
      }
      this.formErrors.resume = ""; // Store the file name in formData
      this.selectedFile = file;
    }
    // Handle file change logic here
  }
  clearError(field: FormField) {
     
    this.formErrors[field] = '';
    if (!this.formData.name.match(/^[a-zA-Z\s]+$/) && this.formData.name) {
       
      this.formErrors.name = 'Name must contain only letters and spaces.';
    }
    const phoneStr = String(this.formData.phonenumber || '');
    if (phoneStr && !phoneStr.match(/^\d{10}$/)) {
       
      this.formErrors.phonenumber = 'Phone number must contain exactly 10 digits.';
    }
    if (this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
       
      this.formErrors.email = 'Email is not valid.';
    }

  }
  submitApplication = ()=> {
    let count = 0;
    if (!this.formData.name) {
      count++;
      this.formErrors.name = 'Full Name is required.';
    }

    if (!this.formData.phonenumber) {
      count++;
      this.formErrors.phonenumber = 'Phone number is required.';
    }
    if (!this.formData.email) {
      count++;
      this.formErrors.email = 'Email Address is required.';
    }

    if (!this.selectedFile) {
      count++;
      this.formErrors.resume = 'Resume is required.';
    }

    if (!this.formData.name.match(/^[a-zA-Z\s]+$/) && this.formData.name) {
      count++;
      this.formErrors.name = 'Name must contain only letters and spaces.';
    }
    const phoneStr = String(this.formData.phonenumber || '');
    if (phoneStr && !phoneStr.match(/^\d{10}$/)) {
      count++;
      this.formErrors.phonenumber = 'Phone number must contain exactly 10 digits.';
    }
    if (this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      count++;
      this.formErrors.email = 'Email is not valid.';
    }

    if (count > 0) {
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `${token}`,
      
    });
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('phone', this.formData.phonenumber);
    formData.append('email', this.formData.email);
    formData.append('job_title', this.formData.job_title);
    if (this.selectedFile) {
      formData.append('resume', this.selectedFile as File);
    }
 
      
    this.http.post(apiUrl + '/api/career-form/', formData,  { headers }).subscribe({
      next: (response) => {
        this.formData = {
          name: '',
          phonenumber: '',
          email: '',
          job_title: ''
           
        };

        this.formErrors = {
          name: '',
          phonenumber: '',
          email: '',
          resume: '',
          job_title: ''
        };
        console.log('Form submitted successfully:', response);
        this.formSubmitted = false;
        this.selectedFile = null;
         this.successMessage = "Career details submitted successfully.";
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'There was an error sending your message. Please try again later.';
        // Handle error response
        console.error('Error submitting form:', error);
        // this.errorMessage = 'There was an error sending your message. Please try again later.';
      }
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
