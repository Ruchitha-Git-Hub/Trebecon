import { AfterViewInit,Component, ElementRef, Renderer2 } from '@angular/core';
import { FaqComponent } from '../../../faq/faq.component';
import { RouterModule } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-technology-services',
  standalone: true,
  imports: [FaqComponent, RouterModule],
  templateUrl: './technology-services.component.html',
  styleUrl: './technology-services.component.css'
})

export class TechnologyServicesComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
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
}