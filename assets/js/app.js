document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('#header');
  
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  
  