// import { Component } from '@angular/core';
import { AfterViewInit,Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FaqComponent } from '../../../faq/faq.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-energy-utilities',
  standalone: true,
  imports: [FaqComponent, RouterModule],
  templateUrl: './energy-utilities.component.html',
  styleUrl: './energy-utilities.component.css'
})
export class EnergyUtilitiesComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}
  ngAfterViewInit(): void {
  
     const toggles = this.el.nativeElement.querySelectorAll('.acc-toggle');
    toggles.forEach((toggle: HTMLElement) => {
      this.renderer.listen(toggle, 'click', () => {
        const accItem = toggle.closest('.acc-item');
        const allItems = this.el.nativeElement.querySelectorAll('.acc-item');

        allItems.forEach((item: HTMLElement) => {
          item.classList.remove('current');
          const content = item.querySelector('.acc-content') as HTMLElement;
          if (content) content.style.display = 'none';
        });

        if (accItem) {
          accItem.classList.add('current');
          const content = accItem.querySelector('.acc-content') as HTMLElement;
          if (content) content.style.display = 'block';
        }
      });
    });
  }

  navigateToContact(event: Event): void {
    event.preventDefault(); // Prevent the default anchor click behavior
    this.router.navigate(['/contact-us']).then(() => {
      // Scroll to top after navigation
      window.scrollTo(0, 0);
    });
  }
}
