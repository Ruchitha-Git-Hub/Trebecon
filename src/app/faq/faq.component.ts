import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
}
