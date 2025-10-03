// header
function toggleMenu() {
  const nav = document.getElementById('nav-part2');
  const isActive = nav.classList.toggle('active');
  // update aria-expanded if hamburger exists
  const hb = document.querySelector('.hamburger');
  if (hb) hb.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  // lock body scroll when menu open on small screens
  if (window.innerWidth <= 900) {
    document.body.style.overflow = isActive ? 'hidden' : '';
  }
}

// Conditionally initialize Locomotive only on wider viewports
let scroll = null;
function initLocomotive() {
  if (window.innerWidth > 900 && typeof LocomotiveScroll !== 'undefined') {
    if (!scroll) {
      scroll = new LocomotiveScroll({ el: document.querySelector('#main'), smooth: true });
    }
  } else {
    if (scroll) {
      try { scroll.destroy(); } catch (e) { /* ignore */ }
      scroll = null;
      // ensure body scroll is enabled
      document.body.style.overflow = '';
    }
  }
}

// init on load and on resize (debounced)
initLocomotive();
let _resizeTimer = null;
window.addEventListener('resize', function() {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(initLocomotive, 250);
});

// Close nav on Escape and outside clicks (mobile)
document.addEventListener('click', function(e) {
  const nav = document.getElementById('nav-part2');
  const hb = document.querySelector('.hamburger');
  if (!nav || !hb) return;
  if (!nav.classList.contains('active')) return;
  if (hb.contains(e.target) || nav.contains(e.target)) return;
  // click outside -> close
  nav.classList.remove('active');
  hb.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const nav = document.getElementById('nav-part2');
    const hb = document.querySelector('.hamburger');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (hb) hb.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
});

// make hamburger keyboard-operable
document.addEventListener('DOMContentLoaded', function() {
  const hb = document.querySelector('.hamburger');
  if (hb) {
    hb.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
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
