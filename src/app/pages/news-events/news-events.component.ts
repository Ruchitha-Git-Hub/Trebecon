import { AfterViewInit,Component } from '@angular/core';
import { FaqComponent } from '../../faq/faq.component';
import { RouterModule } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [FaqComponent, RouterModule],
  templateUrl: './news-events.component.html',
  styleUrl: './news-events.component.css'
})
export class NewsEventsComponent implements AfterViewInit {
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