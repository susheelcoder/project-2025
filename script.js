// header
function toggleMenu() {
  const nav = document.getElementById('nav-part2');
  nav.classList.toggle('active');
  // lock body scroll when mobile menu is open
  if (nav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Locomotive Scroll Initialization
let scroll = null;
function initLocomotive() {
  // create only on larger screens for performance
  if (window.innerWidth > 900 && typeof LocomotiveScroll !== 'undefined') {
    if (!scroll) {
      scroll = new LocomotiveScroll({ el: document.querySelector('#main'), smooth: true });
    }
  } else {
    if (scroll) {
      try { scroll.destroy(); } catch (e) { /* ignore */ }
      scroll = null;
    }
  }
}
// initialize on load
initLocomotive();
// re-init on resize (debounced)
let _resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(initLocomotive, 200);
});

// Page 4 Hover Image Animation
function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

// Swiper Animation
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

// Mobile Menu Toggle
function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag === 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

// Close mobile nav when clicking outside or pressing Escape
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav-part2');
  const hamburger = document.querySelector('.hamburger');
  if (!nav || !nav.classList) return;
  if (nav.classList.contains('active')) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const nav = document.getElementById('nav-part2');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// Loader Animation
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

// Accordion Functionality
function accordionAnimation() {
  document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      const isOpen = title.nextElementSibling.style.display === 'block';

      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.accordion-title span').forEach(s => s.textContent = '+');

      // Toggle current
      if (!isOpen) {
        title.nextElementSibling.style.display = 'block';
        title.querySelector('span').textContent = '−';
      }
    });
  });
}

// Initialize All
swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();
accordionAnimation();

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// --- Global mobile fixes injected at runtime ---
(function globalMobileFixes() {
  try {
    // Inject a small critical CSS override to ensure bg-video displays on small screens
    const styleId = 'pm-mobile-video-fix';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `@media (max-width:900px){ .bg-video{display:block !important;width:100vw !important;height:40vh !important;object-fit:cover !important;} .hero{min-height:40vh !important;height:auto !important;} }`;
      document.head.appendChild(style);
    }

    // Ensure all navs have a hamburger element for consistent behavior
    document.querySelectorAll('nav').forEach(nav => {
      if (!nav.querySelector('.hamburger')) {
        const ham = document.createElement('div');
        ham.className = 'hamburger';
        ham.setAttribute('role', 'button');
        ham.setAttribute('aria-label', 'Open navigation');
        ham.tabIndex = 0;
        ham.innerHTML = '<span></span><span></span><span></span>';
        // insert before nav-part2 if present, otherwise append
        const navPart = nav.querySelector('#nav-part2');
        if (navPart) nav.insertBefore(ham, navPart);
        else nav.appendChild(ham);

        // wire up click & keyboard
        ham.addEventListener('click', toggleMenu);
        ham.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); } });
      }
    });
  } catch (e) {
    // don't break the rest of the script
    console.warn('mobile fixes failed', e);
  }
})();
