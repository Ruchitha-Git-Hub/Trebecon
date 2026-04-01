 
import { Component } from '@angular/core';
import { Router, RouterModule, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
     this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.mobileMenuOpen = false;
        this.mobileMenusubOpen = false;
        this.mobileMenusubOpen1 = false;
        this.mobileMenusubOpen2 = false;
      }
    });
  }
  
  mobileMenuOpen = false;
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileMenusubOpen = false;
  toggleMobileMenusub() {
    this.mobileMenusubOpen = !this.mobileMenusubOpen;
  }

  mobileMenusubOpen1 = false;
  toggleMobileMenusub1() {
    this.mobileMenusubOpen1 = !this.mobileMenusubOpen1;
  }

  mobileMenusubOpen2 = false;
  toggleMobileMenusub2() {
    this.mobileMenusubOpen2 = !this.mobileMenusubOpen2;
  }
  hideHeader() {
    // Hide mobile navigation
    const mobileNav = document.querySelector('.mobile_nav');
    if (mobileNav) {
      mobileNav.classList.remove('show');
      mobileNav.classList.add('collapse');
    }
  }

  navigateToService(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  navigateToIndustry(route: string) {

    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  navigateToTechnology(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}