 document.addEventListener('DOMContentLoaded', function () {
      // Get all menu triggers and dynamic content sections
      const menuTriggers = document.querySelectorAll('.technologies-menu-trigger');
      const dynamicSections = document.querySelectorAll('.technologies-dynamic-content');
      const javascriptTrigger = document.querySelector('.javascript-trigger');
      const javascriptInner = document.querySelector('.javascript-inner');
      const defaultPara = document.querySelector('.default-para');

      // Function to hide all dynamic content sections
      function hideAllSections() {
         dynamicSections.forEach(section => {
            section.style.display = 'none';
            section.style.visibility = 'hidden';
            section.style.opacity = '0';
         });
      }

      // Function to show specific section
      function showSection(targetClass) {
         hideAllSections();
         const targetSection = document.querySelector('.' + targetClass);
         if (targetSection) {
            targetSection.style.display = 'flex';
            targetSection.style.visibility = 'visible';
            targetSection.style.opacity = '1';
         }
      }

      // Function to remove active class from all triggers
      function removeActiveClass() {
         menuTriggers.forEach(trigger => {
            trigger.classList.remove('active');
         });
      }

      // Function to show JavaScript inner content
      function showJavaScriptInner() {
         if (javascriptInner && defaultPara) {
            javascriptInner.classList.remove('hidden');
            javascriptInner.classList.add('visible');
            defaultPara.classList.remove('visible');
            defaultPara.classList.add('hidden');
         }
      }

      // Function to show default paragraph
      function showDefaultPara() {
         if (javascriptInner && defaultPara) {
            javascriptInner.classList.remove('visible');
            javascriptInner.classList.add('hidden');
            defaultPara.classList.remove('hidden');
            defaultPara.classList.add('visible');
         }
      }

      // Add event listeners to each menu trigger
      menuTriggers.forEach(trigger => {
         // Mouse enter event (hover) - works for all triggers
         trigger.addEventListener('mouseenter', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');

            // Remove active class from all triggers and add to current
            removeActiveClass();
            this.classList.add('active');

            // Show corresponding section
            showSection(target);

            // Reset third column to default paragraph when changing main categories
            showDefaultPara();
         });

         // Click event - handle Web Technologies differently
         trigger.addEventListener('click', function (e) {
            // If this is the Web Technologies link, allow normal navigation
            if (this.classList.contains('web-tech-redirect')) {
               // Don't prevent default - let the link navigate normally
               return true;
            }

            // For all other triggers, prevent default and show content
            e.preventDefault();
            const target = this.getAttribute('data-target');

            // Remove active class from all triggers and add to current
            removeActiveClass();
            this.classList.add('active');

            // Show corresponding section
            showSection(target);

            // Reset third column to default paragraph when changing main categories
            showDefaultPara();
         });
      });


      // Add event listeners for JavaScript trigger
      if (javascriptTrigger) {
         // Mouse enter event for JavaScript 
         javascriptTrigger.addEventListener('mouseenter', function (e) {
            showJavaScriptInner();
         });

         // Add event listeners for non-JavaScript items to hide sub-menu
         document.querySelectorAll('.non-js-item').forEach(function (item) {
            item.addEventListener('mouseenter', function () {
               showDefaultPara();
            });
         });


         // Mouse leave event for JavaScript
         javascriptTrigger.addEventListener('mouseleave', function (e) {
            // Only hide if we're not moving to the third column and it's not a redirect link
            if (!this.classList.contains('javascript-redirect')) {
               setTimeout(() => {
                  if (!javascriptInner.matches(':hover')) {
                     showDefaultPara();
                  }
               }, 100);
            }
         });
      }

      // Keep JavaScript inner content visible when hovering over it
      if (javascriptInner) {
         javascriptInner.addEventListener('mouseenter', function () {
            showJavaScriptInner();
         });

         javascriptInner.addEventListener('mouseleave', function () {
            showDefaultPara();
         });
      }

      // Optional: Hide sections when mouse leaves the entire megamenu
      const megamenu = document.querySelector('.custom-megamenu-fullwidth');
      if (megamenu) {
         megamenu.addEventListener('mouseleave', function () {
            hideAllSections();
            removeActiveClass();
            showDefaultPara();
         });
      }

      // Initialize - do not show any technology by default (just show image like Services dropdown)
      // Remove the default Web Technologies display to match Services behavior
      // const defaultTrigger = document.querySelector('[data-target="web-tec"]');
      // if (defaultTrigger) {
      //    defaultTrigger.classList.add('active');
      //    showSection('web-tec');
      // }

      // Initialize third column with default paragraph
      showDefaultPara();


      // code co pilot start


      // --- Begin: Close megamenu on sub-menu link click ---

      // Function to close/hide the megamenu and reset state
      function closeMegaMenu() {
         hideAllSections();
         removeActiveClass();
         showDefaultPara();
         // Hide all megamenu dropdowns (for all .custom-megamenu-fullwidth on page)
         document.querySelectorAll('.custom-megamenu-fullwidth').forEach(function (menu) {
            menu.style.display = 'none';
         });
         // Optionally, restore display on next hover (see below)
      }

      // Attach closeMegaMenu to all sub-menu links in Technologies megamenu (including JavaScript, React, Angular, Vue)
      document.querySelectorAll(
         '.technologies-dynamic-content a.sub-menu, .javascript-inner a.sub-menu'
      ).forEach(function (link) {
         link.addEventListener('click', function () {
            closeMegaMenu();
         });
      });

      // Restore megamenu display on mouseenter for next hover
      document.querySelectorAll('.menu-item-has-children.position-relative.list-unstyled > .custom-megamenu-fullwidth').forEach(function (menu) {
         const parent = menu.parentElement;
         if (parent) {
            parent.addEventListener('mouseenter', function () {
               menu.style.display = '';
            });
         }
      });

      // --- End: Close megamenu on sub-menu link click ---

      // code co pilot end

      // --- Services Megamenu: Show submenu in place of image for all three dropdowns ---



     // showServicesDynamicContent(false);

      var servicesMenu = document.querySelector('.menu-item-has-children.position-relative > .custom-megamenu-fullwidth');
      var servicesParent = servicesMenu.closest('.menu-item-has-children');


   });


   document.addEventListener('DOMContentLoaded', function () {
      // Function to toggle visibility of dynamic content based on hover
      function toggleServicesDynamicContent(targetClass, show) {
         // Hide all dynamic content sections
         document.querySelectorAll('.services-dynamic-content').forEach(function (section) {
            section.style.display = 'none';
         });

         // Show the specific dynamic content section if `show` is true
         if (show && targetClass) {
            const targetSection = document.querySelector('.' + targetClass);
            if (targetSection) {
               targetSection.style.display = 'flow';
            }
         }

         // Show default image if no dropdown is hovered
         const defaultImage = document.querySelector('.services-default-image');
         if (defaultImage) {
            defaultImage.style.display = show ? 'none' : 'block';
         }
      }

      // Add hover event listeners for each dropdown link
      const softwareLink = document.querySelector('.services-menu-trigger[data-target="software-development-services"]');
      const staffingLink = document.querySelector('.services-menu-trigger[data-target="it-staffing-services"]');
      const techServicesLink = document.querySelector('.services-menu-trigger[data-target="technology-services"]');

      if (softwareLink) {
         softwareLink.addEventListener('mouseenter', function () {
            toggleServicesDynamicContent('software-development-services', true);
         });
      }

      if (staffingLink) {
         staffingLink.addEventListener('mouseenter', function () {
            toggleServicesDynamicContent('it-staffing-services', true);
         });
      }

      if (techServicesLink) {
         techServicesLink.addEventListener('mouseenter', function () {
            toggleServicesDynamicContent('technology-services', true);
         });
      }

      // Add mouseleave event listener to hide dynamic content when leaving the menu area
      const servicesMenuContainer = document.querySelector('.menu-item-has-children.position-relative');
      if (servicesMenuContainer) {
         servicesMenuContainer.addEventListener('mouseleave', function () {
            toggleServicesDynamicContent(null, false);
         });
      }
   });

   // Services header onclick hide 

   document.addEventListener('DOMContentLoaded', function () {
      // Select ALL submenu links inside ALL megamenus (Services, Industries, Technologies)
      document.querySelectorAll('.custom-megamenu-fullwidth .sub-menu, .custom-megamenu-fullwidth .subMenuItems').forEach(function (link) {
         link.addEventListener('click', function () {
            // Find the closest open megamenu and hide it
            var menu = link.closest('.custom-megamenu-fullwidth');
            if (menu) {
               menu.style.display = 'none';
            }
         });
      });

      // Restore menu on hover of main menu items (Services, Industries, Technologies)
      document.querySelectorAll('.menu-item-has-children.position-relative').forEach(function (menuItem) {
         menuItem.addEventListener('mouseenter', function () {
            var menu = menuItem.querySelector('.custom-megamenu-fullwidth');
            if (menu) {
               menu.style.display = '';
            }
         });
      });
   });

   document.addEventListener('DOMContentLoaded', function () {
      // --- Technologies Megamenu: Show submenu in place of image for all technology dropdowns ---
      function toggleTechnologiesDynamicContent(targetClass, show) {
         // Hide all dynamic content sections
         document.querySelectorAll('.technologies-dynamic-content').forEach(function (section) {
            section.style.display = 'none';
         });

         // Show the specific dynamic content section if `show` is true
         if (show && targetClass) {
            const targetSection = document.querySelector('.technologies-dynamic-content.' + targetClass);
            if (targetSection) {
               targetSection.style.display = 'block';
            }
         }

         // Show/hide the default image (same as Services dropdown behavior)
         const defaultImage = document.querySelector('.menu-item-has-children.position-relative.list-unstyled .services-default-image');
         if (defaultImage) {
            defaultImage.style.display = show ? 'none' : 'block';
         }
      }

      // Add hover event listeners for each Technologies dropdown link
      document.querySelectorAll('.technologies-menu-trigger[data-target]').forEach(function (trigger) {
         const targetClass = trigger.getAttribute('data-target');
         trigger.addEventListener('mouseenter', function () {
            toggleTechnologiesDynamicContent(targetClass, true);
         });
      });

      // Hide submenu and show image when leaving the menu area
      const technologiesMenuContainer = document.querySelector('.menu-item-has-children.position-relative.list-unstyled');
      if (technologiesMenuContainer) {
         technologiesMenuContainer.addEventListener('mouseleave', function () {
            toggleTechnologiesDynamicContent(null, false);
         });
      }
   });

   document.addEventListener('DOMContentLoaded', function () {
      // --- Services Megamenu: Hide menu on submenu click and redirect for Software Development Services ---
      const servicesMenu = document.querySelector('.menu-item-has-children.position-relative .custom-megamenu-fullwidth');
      const softwareLinks = document.querySelectorAll(
         'a[href="software-development-services.php"], .services-dynamic-content.software-development-services a.sub-menu'
      );
      softwareLinks.forEach(function (link) {
         link.addEventListener('click', function () {
            if (servicesMenu) {
               servicesMenu.style.display = 'none';
            }
         });
      });

      // --- Services Megamenu: Hide menu on submenu click and redirect for IT Staffing Services ---
      const staffingLinks = document.querySelectorAll(
         'a[href="it-staffing-services.php"], .services-dynamic-content.it-staffing-services a.sub-menu'
      );
      staffingLinks.forEach(function (link) {
         link.addEventListener('click', function () {
            if (servicesMenu) {
               servicesMenu.style.display = 'none';
            }
         });
      });

      // Optionally, restore menu on hover of main "Services" menu item
      const servicesMenuItem = document.querySelector('.menu-item-has-children.position-relative');
      if (servicesMenuItem) {
         servicesMenuItem.addEventListener('mouseenter', function () {
            if (servicesMenu) {
               servicesMenu.style.display = '';
            }
         });
      }
   });