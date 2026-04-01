import { AfterViewInit, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
	constructor(private zone: NgZone, private router: Router) { }

	ngAfterViewInit(): void {


		this.zone.runOutsideAngular(() => {
			setTimeout(() => {
				const slider = $('#rev_slider_one');

				// Destroy if already initialized
				// if (slider.hasClass('revslider-initialised')) {
				// 	try {
				// 		slider.revkill(); // destroy old instance
				// 		console.log('dsfsdr sdf sd')
				// 	} catch (e) {
				// 		console.warn('🔁 Revolution already killed or not present');
				// 	}
				// }

				// Now re-initialize
				if (slider.length > 0 && typeof slider.revolution === 'function') {
					slider.show().revolution({
						sliderType: 'standard',
						sliderLayout: 'fullscreen',
						delay: 5000,
						navigation: {
							arrows: { enable: true }
						},
						responsiveLevels: [1200, 992, 768, 576],
						gridwidth: [1200, 992, 768, 576],
						gridheight: [700, 600, 500, 400]
					});
				} else {
					console.warn('⚠️ Revolution slider not ready');
				}
			}, 300); // slight delay to ensure DOM is rendered
		});

		$('.home-client-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			responsive: {
				0: { items: 2 },
				600: { items: 4 },
				1000: { items: 6 }
			}
		});

		// 2. Project Slider
		$('.project-slider').owlCarousel({
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: 4000,
			responsive: {
				0: { items: 1 },
				768: { items: 2 },
				1200: { items: 3 }
			}
		});
	}

	navigateToContact(event: Event): void {
		event.preventDefault(); // Prevent the default anchor click behavior
		//Top view contact us
		this.router.navigate(['/contact-us']).then(() => {
			// Scroll to top after navigation
			window.scrollTo(0, 0);
		});
	}
	
// services pages button

	navigateToPage(event: Event, route: string): void {
		event.preventDefault(); // Prevent the default anchor click behavior
		this.router.navigate([route]).then(() => {
			// Scroll to top after navigation
			window.scrollTo(0, 0);
		});
	}
}
