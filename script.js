
  
/* menu */

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    menuToggle.addEventListener('change', function () {
      mobileMenu.style.display = this.checked ? 'flex' : 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    
    const menuLinks = document.querySelectorAll(".mobile-menu a:not(.no-smooth-scroll)");
  
    // Toggle mobile menu on checkbox change
    menuToggle.addEventListener("change", function () {
      mobileMenu.style.display = this.checked ? "flex" : "none";
    });
  
    // Close mobile menu when a link is clicked
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        menuToggle.checked = false; // Uncheck the checkbox
      });
    });
  
    // Smooth scroll to section when a link is clicked
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
  

 