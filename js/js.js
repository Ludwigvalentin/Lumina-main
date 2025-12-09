/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')

// READ MORE button toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const auraBtn = document.querySelector('.aura-btn');
  const expandedContent = document.querySelector('.aura-expanded-content');
  
  if (auraBtn && expandedContent) {
    auraBtn.addEventListener('click', () => {
      expandedContent.classList.toggle('active');
    });
  }
});



// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const vid = document.getElementById('reklame');
  if (!vid) return;

  // Ensure muted so browsers allow autoplay
  vid.muted = true;

  // Track if user manually paused the video (respect their intent)
  let userPaused = false;
  vid.addEventListener('pause', () => {
    // If pause wasn't triggered by our observer-controlled action, mark as user-paused
    if (!vid._observerControlled) userPaused = true;
    vid._observerControlled = false;
  });
  vid.addEventListener('play', () => {
    userPaused = false;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const visibleEnough = entry.intersectionRatio >= 0.5; // play when >=50% visible
      if (visibleEnough) {
        if (!userPaused) {
          vid._observerControlled = true;
          vid.play().catch(() => {
            // fallback: ensure muted then try again
            vid.muted = true;
            try { vid.play(); } catch (e) { /* ignore */ }
          });
        }
      } else {
        // pause when less than threshold visible
        vid._observerControlled = true;
        vid.pause();
      }
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  observer.observe(vid);
});



//----------------------------------------------------------------- Back to Top button
document.addEventListener('DOMContentLoaded', () => {
  // Opret back to top knappen
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'backToTop';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Tilbage til toppen');
  document.body.appendChild(backToTopBtn);

  // Vis/skjul knappen når der scrolles
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll til toppen når der klikkes
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
//----------------------------------------------------------------- Back to Top button



//----------------------------------------------------------------- Farve skift funktion
document.addEventListener('DOMContentLoaded', () => {
  const colorCircles = document.querySelectorAll('.color-circle');
  const heroImage = document.querySelector('.hero-img');
  
  if (!colorCircles.length || !heroImage) return;
  
  colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
      const newImage = circle.getAttribute('data-image');
      if (newImage) {
        // Instant skift - ingen transition
        heroImage.src = newImage;
      }
      
      // Fjern active class fra alle
      colorCircles.forEach(c => c.classList.remove('active'));
      // Tilføj active til den klikkede
      circle.classList.add('active');
    });
  });
  
  // Sæt første farve som active ved start
  if (colorCircles[0]) {
    colorCircles[0].classList.add('active');
  }
});
//----------------------------------------------------------------- Farve skift funktion

//----------------------------------------------------------------- Fold ud og ind funktion
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Luk alle andre accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle den klikkede item (åbn hvis den var lukket)
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });
});
//----------------------------------------------------------------- Fold ud og ind funktion

//----------------------------------------------------------------- Lumina One farve skift
document.addEventListener('DOMContentLoaded', () => {
  const luminaColorCircles = document.querySelectorAll('.lumina-color-circle');
  const luminaImage = document.querySelector('.lumina-one-image img');
  
  const colorImages = [
    'images/koebs-menu-sort.jpg',      // Sort
    'images/koebs-menu-lilla.jpg',     // Lilla
    'images/koebs-menu-chrome.jpg',    // Chrome
    'images/koebs-menugrøn.jpg',       // Grøn
    'images/koebs-menu-blå.jpg'        // Blå
  ];
  
  if (!luminaColorCircles.length || !luminaImage) return;
  
  luminaColorCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      const newImage = colorImages[index];
      
      if (newImage) {
        luminaImage.src = newImage;
      }
      
      // Fjern active class fra alle
      luminaColorCircles.forEach(c => c.classList.remove('active'));
      // Tilføj active til den klikkede
      circle.classList.add('active');
    });
  });
  
  // Sæt første farve som active ved start
  if (luminaColorCircles[0]) {
    luminaColorCircles[0].classList.add('active');
  }
});
//----------------------------------------------------------------- Lumina One farve skift

