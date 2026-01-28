// animesan.js

/* ================== CSS INJECT ================== */
const css = `
:root {
  --purple-dark: #bc1be7;
  --purple-light: #bc1be7;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

/* --- PRELOADER --- */
#preloader {
  position: fixed;
  inset: 0;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.logo-container {
  display: flex;
  align-items: center;
  transform: scale(0.8);
}

@media (min-width: 768px) {
  .logo-container { transform: scale(1.1); }
}

/* --- LOGO --- */
.shadow-layer {
  position: absolute;
  width: 90px;
  height: 120px;
  background: var(--purple-light);
  top: -8px;
  left: -12px;
  clip-path: polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
  border-radius: 10px 10px 0 0;
}

.main-bookmark {
  position: relative;
  width: 95px;
  height: 125px;
  background: var(--purple-dark);
  clip-path: polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
  border-radius: 10px 10px 0 0;
}

.map-svg {
  width: 100px;
  height: 100px;
}

.path-line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* --- BRAND BAR --- */
.brand-bar {
  height: 85px;
  width: 0;
  background: #fff;
  border: 6px solid var(--purple-dark);
  border-left: none;
  border-radius: 0 20px 20px 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  animation: expandBar 1s cubic-bezier(.77,0,.175,1) forwards 1.2s;
}

@keyframes expandBar {
  to { width: 310px; }
}

.brand-text {
  font-size: 57px;
  font-weight: 900;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards 1.8s;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* --- HIDE PRELOADER --- */
.loaded #preloader {
  opacity: 0;
  visibility: hidden;
}
`;

const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

/* ================== PRELOADER HTML ================== */
const preloaderHTML = `
<div id="preloader">
  <div class="logo-container">
    <div class="shadow-layer"></div>
    <div class="main-bookmark">
      <svg class="map-svg" viewBox="0 0 100 100">
        <path class="path-line" d="
          M10 0 L10 70
          A10 10 0 0 0 30 70
          L30 20
          A10 10 0 0 1 50 20
          L50 70
          A16 9 0 0 0 70 80
          A13 20 0 0 1 80 94
          L100 95
        "/>
      </svg>
    </div>
  </div>
  <div class="brand-bar">
    <span class="brand-text">Haproven</span>
  </div>
</div>
`;

document.body.insertAdjacentHTML("afterbegin", preloaderHTML);

/* ================== PATH DRAW ================== */
const path = document.querySelector(".path-line");
if (path) {
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  path.getBoundingClientRect();
  path.style.transition = "stroke-dashoffset 0.9s ease 0.1s";
  path.style.strokeDashoffset = "0";
}

/* ================== LOAD COMPLETE ================== */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2600);
});
