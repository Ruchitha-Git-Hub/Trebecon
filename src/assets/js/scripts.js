(function( $ ) {
    "use strict";
    
    $('.woocommerce-form-coupon-toggle .showcoupon').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });

    /* ========================================== 
	Sticky Header 1
	========================================== */
	$(window).on("scroll", function(){
		if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
			var site_header = $('#site-header').outerHeight() + 30;	
			
		    if ($(window).scrollTop() >= site_header) {	    	
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	        
		    }else {
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
		    }
		}
	});

    /* ========================================== 
    Search on Header
    ========================================== */
    $('.toggle_search').on("click", function(){
        $(this).toggleClass( "active" );
        $('.h-search-form-field').toggleClass('show');
        if ($(this).find('i').hasClass( "flaticon-search" )) {
            $('.toggle_search > i').removeClass( "flaticon-search" ).addClass("flaticon-close");
        }else{
            $('.toggle_search > i').removeClass( "flaticon-close" ).addClass("flaticon-search");
        }
        $('.h-search-form-inner > form > input.search-field').focus();
    });

    /* --------------------------------------------------
    * switcher
    * --------------------------------------------------*/


     $(".ot-switcher input").click(function() {
        if($(this).is(":checked")){
            $('.price-1').css('display','none');
            $('.price-2').css('display','inline-block');
            $('.per').css('display','none');
            $('.per-year').css('display','inline-block');
        }else{
            $('.price-2').css('display','none');
            $('.price-1').css('display','inline-block');
            $('.per-year').css('display','none');
            $('.per').css('display','inline-block');
        }
    });
    
    var navInneer = $(".one-nav");
    if( navInneer.length > 0 ){
        navInneer.singlePageNav({
            
            updateHash: false,
            filter: 'a[href^="#"]',
            offset: 0,
            speed: 600,
            currentClass: "current",
            easing: "swing"
            
        });
    };
    /* ========================================== 
    Back To Top
    ========================================== */
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

    /* Counter */
    $(window).on('scroll', function() {
        $('.ot-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });

        $('.ot-counter2').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
        
        $('.ot-progress').each(function() {
            var pos_y = $(this).offset().top;
            var value = $(this).find(".progress-bar").data('percent');
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find(".progress-bar").css({
                    'width': value
                }, "slow");
            }
        });

        $('.circle-progress').each(function() {
            var bar_color = $(this).data('color');
            var bar_hei   = $(this).data('height');
            var bar_size  = $(this).data('size');
            var pos_y = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent)) + '%';
                    }
                });
            }
        });

        $('.ot-chart-bar:not([data-processed])').each(function() {
            var bar = $(this),
                chart = bar.find('.col-chart'),
                innerBar = bar.find('.inner-bar'),
                heightChart = bar.data('height'),
                progressEnd = bar.data('percent'),
                percentText = bar.find('.percent');
            var scrollTop = $(document).scrollTop() + $(window).height();

            if ( scrollTop > bar.offset().top +  bar.height() ) {
                bar.attr("data-processed", "true");
                chart.css({ "height": heightChart + "px", "animation" : "slide-up 1.5s ease-in-out"});
                innerBar.css({ "height": heightChart + "px"});

                if( progressEnd ){
                    for (var i = 0; i <= 50; i++) {
                        (function (count) {
                            setTimeout(function () {
                                var num = ((progressEnd / 50) * count) + Number.EPSILON;
                                percentText.html(Math.round(num * 100) / 100 + "%");
                            }, 30 * count);
                        })(i);
                    }
                }
                
            }
        });
    });


    $('.ot-accordions').each( function () {
        var allPanels = $(this).find('.acc-content');
        $(this).find('.acc-toggle').on( 'click', function(){

            var $this = $(this),
                $target = $this.next();

            if(!$target.hasClass('active')){
                allPanels.removeClass('active').slideUp(300);
                allPanels.parent().removeClass('current');
                $target.addClass('active').slideDown(300);
                $target.parent().addClass('current');
            }

            return false;
        });
        $(this).find('.acc-toggle:first').trigger('click');
    });

    $('.ot-acc--with-icon').each( function () {
        var selector = $(this),
            content  = selector.find('.ot-acc-item__content'),
            trigger  = selector.find('.ot-acc-item__trigger');

        trigger.off("click");

        trigger.each(function(){
            if ($(this).data('default') == 'yes') {
                $(this).next().addClass('active').slideDown(300);
                $(this).parent().addClass('current');
            }
        });

        trigger.on('click', function(e){
            e.preventDefault();
            var $this = $(this);
            $this.next().toggleClass('active').slideToggle(300);
            $this.parent().toggleClass('current');
            content.not($this.next()).slideUp(300);
            trigger.not($this).parent().removeClass('current');
        });
    });


    $('.ot-tabs').each(function() {
        $(this).find('.tabs-heading li').first().addClass('current');
        $(this).find('.tab-content').first().addClass('current');
    });

    $('.tabs-heading li').on( 'click', function(){
        var tab_id = $(this).attr('data-tab');
        $(this).siblings().removeClass('current');
        $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    /* --------------------------------------------------
    * big tabs
    * --------------------------------------------------*/
    $('.tab-titles .title-item, .tab-titles-2 .title-item-2').on( 'click', function(){
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.content-tab').hide();
        $('.content-tab-2').hide();
        $($(this).data('link')).show();

        return false;
    });
    $('.tab-titles .title-item:first, .tab-titles-2 .title-item-2:first').trigger('click');

    $('.message-box > i').on( 'click', function() {
        $(this).parent().fadeOut();
    });

    $('.ot-countdown').each( function() {
        var date   = $(this).data('date'),
            zone   = $(this).data('zone'),
            day    = $(this).data('day'),
            days   = $(this).data('days'),
            hour   = $(this).data('hour'),
            hours  = $(this).data('hours'),
            min    = $(this).data('min'),
            mins   = $(this).data('mins'),
            second = $(this).data('second'),
            seconds = $(this).data('seconds');
        $(this).countdown({
            date: date,
            offset: zone,
            day: day,
            days: days,
            hour: hour,
            hours: hours,
            minute: min,
            minutes: mins,
            second: second,
            seconds: seconds
        }, function () {
            alert('Done!');
        });
    });


    /*Popup Video*/
    var $video_play = $('.btn-play');
    if ($video_play.length > 0 ) {
        $video_play.magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true,
            callbacks: {
            beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
    }

    
    
    $(".link-image-action").magnificPopup({
        type: "image"
    });


    /*Portfolio Filter*/
    $(window).load( function () {
        if( $('#projects_grid').length > 0 ){
            var $container = $('#projects_grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                layoutMode : 'masonry'
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
        };    
    });


    
        // Initialize popup as usual
        $('.image-link').magnificPopup({ 
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
                }        
            },
            image: {
                // options for image content type
                titleSrc: 'title'
            },
            gallery: {
                // options for gallery
                enabled: true
            },
        });// JavaScript Document

    /* --------------------------------------------------
    * Client logo
    * --------------------------------------------------*/
    $('.home-client-carousel').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },          
            767:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    $('.home-10-client-carousel').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },          
            767:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
    
    /* --------------------------------------------------
    * project carousel
    * --------------------------------------------------*/

     $(".project-slider").owlCarousel({
        stagePadding: 365,
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1400:{
                stagePadding: 365,
                items:2
            },
            1200:{
                stagePadding: false,
                items:3
            },
            992:{
                stagePadding: false,
                items:2
            },
            767:{
                stagePadding: false,
                items:2
            },
            0:{
                stagePadding: false,
                items:1
            }
        }
     });

     $(".project-slider-i15").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1200:{
                items:3
            },
            767:{
                items:2
            },
            0:{
                items:1
            }
        }
     });

     $(".simple-slider").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:2
            },
            600:{
                items:2
            },
            0:{
                items:1
            }
        }
     });

     $('.single-product').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });


    /*Gallery Post*/
    $(".gallery-post").owlCarousel({
        items:1,
        nav:true,
        dots: false,
        auto: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive: []
    });

    /* --------------------------------------------------
    * Testimonial carousel
    * --------------------------------------------------*/
     $(".ot-testimonials-slider").owlCarousel({
        nav:true,
        dots: false,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:2
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });

     $(".ot-testimonials-slider-2").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1200:{
                items:4
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });

     $(".ot-testimonials-slider-dots").owlCarousel({
        nav:true,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:2
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });

     $(".ot-testimonials-slider-12").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1200:{
                items:4
            },
            1000:{
                items:2
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });

     $('.ot-testimonials-slider-3').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });

     $('.ot-testimonials-slider-15').owlCarousel({
        items: 1,
        nav:true,
        dots: false,
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:500,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        startPosition: 'URLHash'
    });
    /* --------------------------------------------------
    * industis carousel
    * --------------------------------------------------*/

     $(".ot-industries-slider").owlCarousel({
        stagePadding: 365,
        items:2,
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1600:{
                stagePadding: 365,
                items:2
            },
            1200:{
                stagePadding: 200,
                items:2
            },
            992:{
                stagePadding: false,
                items:2
            },
            0:{
                stagePadding: false,
                items:1
            }
        }
     });

     $(".ot-team-slider").owlCarousel({
        nav:true,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:4,
                margin: 30
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });

     $(".roadmap-slide").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:5,
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });
     
    $(window).load(function(){
    $('.projects-grid').each( function(){
        var $container = $(this); 
        $container.isotope({ 
            itemSelector : '.project-item', 
            animationEngine : 'css',
        });

        var $optionSets = $('.project_filters'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.on('click', function(){
            var $this = $(this);

            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

            var selector = $(this).attr('data-filter');
                $container.isotope({ 
                    filter: selector 
                });
            return false;
        });
    });
    });


})( jQuery );


// Login and Register form Script

        document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const togglePassword = document.getElementById('togglePassword');
            const loginBtn = document.getElementById('loginBtn');
            const registerBtn = document.getElementById('registerBtn');
            const loginContainer = document.getElementById('loginContainer');
            const registerContainer = document.getElementById('registerContainer');
            const showRegisterBtn = document.getElementById('showRegister');
            const showLoginBtn = document.getElementById('showLogin');

            // Form switching functionality
            if (showRegisterBtn && loginContainer && registerContainer) {
                showRegisterBtn.addEventListener('click', function () {
                    loginContainer.style.display = 'none';
                    registerContainer.style.display = 'block';
                });
            }

            if (showLoginBtn && loginContainer && registerContainer) {
                showLoginBtn.addEventListener('click', function () {
                    registerContainer.style.display = 'none';
                    loginContainer.style.display = 'block';
                });
            }

            // Password toggle functionality for login
            if (togglePassword && passwordInput) {
                togglePassword.addEventListener('click', function () {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    this.querySelector('i').classList.toggle('fa-eye');
                    this.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }

            // Password toggle functionality for register
            const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
            const registerPasswordInput = document.getElementById('registerPassword');
            if (toggleRegisterPassword && registerPasswordInput) {
                toggleRegisterPassword.addEventListener('click', function () {
                    const type = registerPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    registerPasswordInput.setAttribute('type', type);
                    this.querySelector('i').classList.toggle('fa-eye');
                    this.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }

            // Confirm password toggle
            const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            if (toggleConfirmPassword && confirmPasswordInput) {
                toggleConfirmPassword.addEventListener('click', function () {
                    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    confirmPasswordInput.setAttribute('type', type);
                    this.querySelector('i').classList.toggle('fa-eye');
                    this.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }

            // Validation functions
            function validateEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            function validatePassword(password) {
                return password.length >= 8;
            }

            function validateName(name) {
                return name.trim().length >= 2;
            }

            function validatePhone(phone) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                return phoneRegex.test(phone.replace(/\s/g, ''));
            }

            function showValidation(input, isValid, message) {
                const feedback = input.parentElement.querySelector('.invalid-feedback');

                if (isValid) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                    feedback.textContent = '';
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                    feedback.textContent = message;
                }
            }

            // Login form validation
            if (emailInput) {
                emailInput.addEventListener('blur', function () {
                    const email = this.value.trim();
                    if (email === '') {
                        showValidation(this, false, 'Email is required');
                    } else if (!validateEmail(email)) {
                        showValidation(this, false, 'Please enter a valid email address');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (passwordInput) {
                passwordInput.addEventListener('blur', function () {
                    const password = this.value;
                    if (password === '') {
                        showValidation(this, false, 'Password is required');
                    } else if (!validatePassword(password)) {
                        showValidation(this, false, 'Password must be at least 8 characters long');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            // Register form validation
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const registerEmailInput = document.getElementById('registerEmail');
            const phoneInput = document.getElementById('phone');
            const agreeTermsInput = document.getElementById('agreeTerms');

            if (firstNameInput) {
                firstNameInput.addEventListener('blur', function () {
                    const name = this.value.trim();
                    if (name === '') {
                        showValidation(this, false, 'First name is required');
                    } else if (!validateName(name)) {
                        showValidation(this, false, 'First name must be at least 2 characters');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (lastNameInput) {
                lastNameInput.addEventListener('blur', function () {
                    const name = this.value.trim();
                    if (name === '') {
                        showValidation(this, false, 'Last name is required');
                    } else if (!validateName(name)) {
                        showValidation(this, false, 'Last name must be at least 2 characters');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (registerEmailInput) {
                registerEmailInput.addEventListener('blur', function () {
                    const email = this.value.trim();
                    if (email === '') {
                        showValidation(this, false, 'Email is required');
                    } else if (!validateEmail(email)) {
                        showValidation(this, false, 'Please enter a valid email address');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (phoneInput) {
                phoneInput.addEventListener('blur', function () {
                    const phone = this.value.trim();
                    if (phone === '') {
                        showValidation(this, false, 'Phone number is required');
                    } else if (!validatePhone(phone)) {
                        showValidation(this, false, 'Please enter a valid phone number');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (registerPasswordInput) {
                registerPasswordInput.addEventListener('blur', function () {
                    const password = this.value;
                    if (password === '') {
                        showValidation(this, false, 'Password is required');
                    } else if (!validatePassword(password)) {
                        showValidation(this, false, 'Password must be at least 8 characters long');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            if (confirmPasswordInput && registerPasswordInput) {
                confirmPasswordInput.addEventListener('blur', function () {
                    const password = registerPasswordInput.value;
                    const confirmPassword = this.value;
                    if (confirmPassword === '') {
                        showValidation(this, false, 'Please confirm your password');
                    } else if (password !== confirmPassword) {
                        showValidation(this, false, 'Passwords do not match');
                    } else {
                        showValidation(this, true, '');
                    }
                });
            }

            // Clear validation on input
            function clearValidationOnInput(input) {
                if (!input) return;
                input.addEventListener('input', function () {
                    this.classList.remove('is-valid', 'is-invalid');
                    const feedback = this.parentElement.querySelector('.invalid-feedback');
                    if (feedback) feedback.textContent = '';
                });
            }

            // Apply clear validation to all inputs
            [
                emailInput, passwordInput, firstNameInput, lastNameInput,
                registerEmailInput, phoneInput, registerPasswordInput, confirmPasswordInput
            ].forEach(clearValidationOnInput);

            // Login form submission
            if (loginForm && loginBtn && emailInput && passwordInput) {
                loginForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const email = emailInput.value.trim();
                    const password = passwordInput.value;
                    const loading = loginBtn.querySelector('.loading');
                    const normalText = loginBtn.querySelector('.normal-text');

                    let isValid = true;

                    if (email === '') {
                        showValidation(emailInput, false, 'Email is required');
                        isValid = false;
                    } else if (!validateEmail(email)) {
                        showValidation(emailInput, false, 'Please enter a valid email address');
                        isValid = false;
                    } else {
                        showValidation(emailInput, true, '');
                    }

                    if (password === '') {
                        showValidation(passwordInput, false, 'Password is required');
                        isValid = false;
                    } else if (!validatePassword(password)) {
                        showValidation(passwordInput, false, 'Password must be at least 8 characters long');
                        isValid = false;
                    } else {
                        showValidation(passwordInput, true, '');
                    }

                    if (isValid) {
                        loginBtn.disabled = true;
                        if (loading) loading.style.display = 'inline';
                        if (normalText) normalText.style.display = 'none';

                        setTimeout(function () {
                            loginBtn.disabled = false;
                            if (loading) loading.style.display = 'none';
                            if (normalText) normalText.style.display = 'inline';
                            alert('Login successful! (This is a demo)');
                            loginForm.reset();
                            emailInput.classList.remove('is-valid', 'is-invalid');
                            passwordInput.classList.remove('is-valid', 'is-invalid');
                        }, 2000);
                    }
                });
            }

            // Register form submission
            if (registerForm && registerBtn && firstNameInput && lastNameInput && registerEmailInput && phoneInput && registerPasswordInput && confirmPasswordInput && agreeTermsInput) {
                registerForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const firstName = firstNameInput.value.trim();
                    const lastName = lastNameInput.value.trim();
                    const email = registerEmailInput.value.trim();
                    const phone = phoneInput.value.trim();
                    const password = registerPasswordInput.value;
                    const confirmPassword = confirmPasswordInput.value;
                    const agreeTerms = agreeTermsInput.checked;
                    const loading = registerBtn.querySelector('.loading');
                    const normalText = registerBtn.querySelector('.normal-text');

                    let isValid = true;

                    // Validate all fields
                    if (firstName === '') {
                        showValidation(firstNameInput, false, 'First name is required');
                        isValid = false;
                    } else if (!validateName(firstName)) {
                        showValidation(firstNameInput, false, 'First name must be at least 2 characters');
                        isValid = false;
                    } else {
                        showValidation(firstNameInput, true, '');
                    }

                    if (lastName === '') {
                        showValidation(lastNameInput, false, 'Last name is required');
                        isValid = false;
                    } else if (!validateName(lastName)) {
                        showValidation(lastNameInput, false, 'Last name must be at least 2 characters');
                        isValid = false;
                    } else {
                        showValidation(lastNameInput, true, '');
                    }

                    if (email === '') {
                        showValidation(registerEmailInput, false, 'Email is required');
                        isValid = false;
                    } else if (!validateEmail(email)) {
                        showValidation(registerEmailInput, false, 'Please enter a valid email address');
                        isValid = false;
                    } else {
                        showValidation(registerEmailInput, true, '');
                    }

                    if (phone === '') {
                        showValidation(phoneInput, false, 'Phone number is required');
                        isValid = false;
                    } else if (!validatePhone(phone)) {
                        showValidation(phoneInput, false, 'Please enter a valid phone number');
                        isValid = false;
                    } else {
                        showValidation(phoneInput, true, '');
                    }

                    if (password === '') {
                        showValidation(registerPasswordInput, false, 'Password is required');
                        isValid = false;
                    } else if (!validatePassword(password)) {
                        showValidation(registerPasswordInput, false, 'Password must be at least 8 characters long');
                        isValid = false;
                    } else {
                        showValidation(registerPasswordInput, true, '');
                    }

                    if (confirmPassword === '') {
                        showValidation(confirmPasswordInput, false, 'Please confirm your password');
                        isValid = false;
                    } else if (password !== confirmPassword) {
                        showValidation(confirmPasswordInput, false, 'Passwords do not match');
                        isValid = false;
                    } else {
                        showValidation(confirmPasswordInput, true, '');
                    }

                    if (!agreeTerms) {
                        const feedback = agreeTermsInput.parentElement.querySelector('.invalid-feedback');
                        if (feedback) feedback.textContent = 'You must agree to the terms and conditions';
                        agreeTermsInput.classList.add('is-invalid');
                        isValid = false;
                    } else {
                        const feedback = agreeTermsInput.parentElement.querySelector('.invalid-feedback');
                        if (feedback) feedback.textContent = '';
                        agreeTermsInput.classList.remove('is-invalid');
                    }

                    if (isValid) {
                        registerBtn.disabled = true;
                        if (loading) loading.style.display = 'inline';
                        if (normalText) normalText.style.display = 'none';

                        setTimeout(function () {
                            registerBtn.disabled = false;
                            if (loading) loading.style.display = 'none';
                            if (normalText) normalText.style.display = 'inline';
                            alert('Registration successful! (This is a demo)');
                            registerForm.reset();
                            [firstNameInput, lastNameInput, registerEmailInput, phoneInput,
                                registerPasswordInput, confirmPasswordInput].forEach(input => {
                                    input.classList.remove('is-valid', 'is-invalid');
                                });
                            agreeTermsInput.classList.remove('is-invalid');
                        }, 2000);
                    }
                });
            }

            // Forgot password functionality
            const forgotPasswordBtn = document.getElementById('forgotPassword');
            if (forgotPasswordBtn) {
                forgotPasswordBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    alert('Forgot password functionality would be implemented here');
                });
            }
        });
  
// to open navigation menu on mobile devices

// $(document).ready(function() {
//     $('#mmenu_toggle').on('click', function(e) {
//         e.preventDefault();
//         $('.mmenu_wrapper .mobile_nav').toggleClass('show');
//     });
// });


        // open close navigation menu on mobile devices

// $(document).ready(function() {
//     $('#mmenu_toggle').on('click', function(e) {
//         e.preventDefault();
//         $('.mobile-nav').toggleClass('open'); // Adjust selector to your mobile menu container
//         $(this).toggleClass('active');
//     });
// });



// code to open sub menuu items on mobile devices

$(document).ready(function() {
    // Toggle submenu on arrow click in mobile menu
    $('.mobile_nav').on('click', '.arrow', function(e) {
        e.preventDefault();
        var $parentLi = $(this).closest('li.menu-item-has-children');
        $parentLi.children('ul').slideToggle(200);
        $parentLi.toggleClass('open');
    });
});
