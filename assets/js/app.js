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
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll("h3[data-target]");
    const duration = 2000; // Duración de la animación en milisegundos
  
    // Función de animación del contador
    function animateCounter(counter) {
      const target = +counter.getAttribute("data-target");
      const increment = target / (duration / 16); // Incremento por cada fotograma (16 ms aprox.)
  
      function updateCounter() {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }
  
      updateCounter();
    }
  
    // Configuración del Intersection Observer
    const observerOptions = {
      threshold: 0.5 // Ajusta la visibilidad (50% de la sección visible) para activar la animación
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter); // Dejar de observar después de iniciar la animación
        }
      });
    }, observerOptions);
  
    // Asociar el observer a cada contador
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  