document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('nav a');
  
    function highlightNavLink() {
      let scrollPosition = window.scrollY;
  
      sections.forEach((section) => {
        const top = section.offsetTop - 70; // Adjust based on the navbar height
        const bottom = top + section.clientHeight;
  
        if (scrollPosition >= top && scrollPosition < bottom) {
          navbarLinks.forEach((link) => {
            link.classList.remove('active');
          });
  
          const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
          if (correspondingLink) {
            correspondingLink.classList.add('active');
          }
        }
      });
    }
  
    // Add scroll event listener to highlight active section
    window.addEventListener('scroll', highlightNavLink);
  });
  