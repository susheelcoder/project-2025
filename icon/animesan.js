// // /* ===============================
// //    HAPROVEN BRAND COMPONENT
// //    usage:
// //    <div class="haproven-brand lg animate"></div>
// // ================================ */

// // (function () {

// //   /* -------- CSS -------- */
// //   const style = document.createElement("style");
// //   style.innerHTML = `
// //   :root{
// //     --purple-dark:#bc1be7;
// //     --purple-light:#bc1be7;
// //   }

// //   .haproven-brand{
// //     display:flex;
// //     align-items:center;
// //     font-family:sans-serif;
// //   }

// //   /* ICON */
// //   .haproven-icon{
// //     position:relative;
// //     display:flex;
// //     align-items:center;
// //     justify-content:center;
// //   }

// //   .haproven-icon .shadow-layer{
// //     position:absolute;
// //     background:var(--purple-light);
// //     clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
// //     border-radius:10px 10px 0 0;
// //     opacity:.45;
// //   }

// //   .haproven-icon .main-bookmark{
// //     position:relative;
// //     background:var(--purple-dark);
// //     clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
// //     border-radius:10px 10px 0 0;
// //     display:flex;
// //     align-items:center;
// //     justify-content:center;
// //     z-index:2;
// //   }

// //   .haproven-icon svg{
// //     fill:none;
// //   }

// //   .haproven-icon .path-line{
// //     stroke:white;
// //     stroke-width:6;
// //     stroke-linecap:round;
// //     stroke-linejoin:round;
// //   }

// //   /* TEXT BAR */
// //   .brand-bar{
// //     background:#fff;
// //     border:6px solid var(--purple-dark);
// //     border-left:none;
// //     border-radius:0 20px 20px 0;
// //     display:flex;
// //     align-items:center;
// //     padding:0 18px;
// //     margin-left:10px;
// //   }

// //   .brand-text{
// //     font-weight:700;
// //     color:#000;
// //     white-space:nowrap;
// //   }

// //   /* ---- SIZES ---- */
// //   .sm .haproven-icon{width:40px;height:55px}
// //   .sm .main-bookmark{width:40px;height:55px}
// //   .sm .shadow-layer{width:38px;height:52px;top:-4px;left:-4px}
// //   .sm svg {width: 51px;height: 51px;margin-right: -16px;}
// //   .sm .brand-bar{height:42px}
// //   .sm .brand-text{font-size:20px}

// //   .md .haproven-icon{width:65px;height:90px}
// //   .md .main-bookmark{width:65px;height:90px}
// //   .md .shadow-layer{width:62px;height:85px;top:-6px;left:-6px}
// //   .md svg { width: 70px; height: 70px; margin-right: -12px;}
// //   .md .brand-bar{height:60px}
// //   .md .brand-text{font-size:32px}

// //   .lg .haproven-icon{width:95px;height:125px}
// //   .lg .main-bookmark{width:95px;height:125px}
// //   .lg .shadow-layer{width:90px;height:120px;top:-8px;left:-10px}
// //    .lg svg { width: 107px; height: 137px; margin-right: -36px;}
// //   .lg .brand-bar{height:85px}
// //   .lg .brand-text{font-size:55px}

// //   /* ---- ANIMATION ---- */
// //   .animate .path-line{
// //     stroke-dasharray:260;
// //     stroke-dashoffset:260;
// //     animation:hapDraw 1s ease forwards;
// //   }

// //   @keyframes hapDraw{
// //     to{stroke-dashoffset:0}
// //   }
// //   `;
// //   document.head.appendChild(style);

// //   /* -------- HTML -------- */
// //   function initBrand(el){
// //     el.innerHTML = `
// //       <div class="haproven-icon">
// //         <div class="shadow-layer"></div>
// //         <div class="main-bookmark">
// //           <svg viewBox="0 0 100 100">
// //             <path class="path-line"
// //               d="M10 0 L10 70
// //                  A10 10 0 0 0 30 70
// //                  L30 20
// //                  A10 10 0 0 1 50 20
// //                  L50 70
// //                  A16 9 0 0 0 70 80
// //                  A13 20 0 0 1 80 94
// //                  L100 95"/>
// //           </svg>
// //         </div>
// //       </div>
// //       <div class="brand-bar">
// //         <span class="brand-text">Haproven</span>
// //       </div>
// //     `;
// //   }

// //   document.addEventListener("DOMContentLoaded",()=>{
// //     document.querySelectorAll(".haproven-brand").forEach(initBrand);
// //   });

// // })();






























// /* ===============================
//    HAPROVEN BRAND COMPONENT
//    usage:
//    <div class="haproven-brand xs"></div>
//    sizes: xs, sm, md, lg
// ================================ */

// (function () {

//     /* -------- CSS -------- */
//     const style = document.createElement("style");
//     style.innerHTML = `
//   :root{
//     --purple-dark:#bc1be7;
//     --purple-light:#bc1be7;
//   }

//   .haproven-brand{
//     display:flex;
//     align-items:center;
//     font-family:sans-serif;
//   }

//   /* ICON */
//   .haproven-icon{
//     position:relative;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//   }

//   .haproven-icon .shadow-layer{
//     position:absolute;
//     background:var(--purple-light);
//     clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
//     border-radius:5px 5px 0 0;
//     opacity:.45;
//   }

//   .haproven-icon .main-bookmark{
//     position:relative;
//     background:var(--purple-dark);
//     clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
//     border-radius:5px 5px 0 0;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     z-index:2;
//   }

//   .haproven-icon svg{
//     fill:none;
//   }

//   .haproven-icon .path-line{
//     stroke:white;
//     stroke-width:6;
//     stroke-linecap:round;
//     stroke-linejoin:round;
//   }

//   /* TEXT BAR */
//   .brand-bar{
//     background:#fff;
//     border:6px solid var(--purple-dark);
//     border-left:none;
//     border-radius:0 10px 10px 0;
//     display:flex;
//     align-items:center;
//     padding:0 18px;
//     margin-left:5px;
//   }
//      .brand-bars{
//     background:#00000000;
//     border:6px solid var(--purple-dark);
//     border-left:none;
//     border-radius:0 10px 10px 0;
//     display:flex;
//     align-items:center;
//     padding:0 18px;
//     margin-left:5px;
//   }

//   .brand-text{
//     font-weight:700;
//     color:#000;
//     white-space:nowrap;
//   }

//   /* ---- SIZES ---- */
//   /* Extra Small (xs) */
//   .xs .haproven-icon{width:30px;height:40px}
//   .xs .main-bookmark{width:30px;height:40px}
//   .xs .shadow-layer{width:28px;height:38px;top:-3px;left:-3px}
//   .xs svg {width: 35px;height: 35px;margin-right: -10px;}
//   .xs .brand-bar{height:28px; padding: 0 12px; border-width: 5px;}
//   .xs .brand-bar {height: 23px; padding: 0 9px; border-width: 3px;}
//   .xs .brand-text{font-size:14px}

//   /* Small (sm) - HEIGHT REDUCED */
//   .sm .haproven-icon{width:40px;height:55px}
//   .sm .main-bookmark{width:32px;height:42px}
//   .sm .shadow-layer{width:31px;height:44px;top:3px;left:0px}
//   .sm svg {width: 38px;height: 49px;margin-right: -16px;}
//   .sm .brand-bar{height:24px; padding: 0 5px; border-width: 3px;}
//   .sm .brand-text{font-size:18px}

//   /* Medium (md) */
//   .md .haproven-icon{width:65px;height:90px}
//   .md .main-bookmark{width:65px;height:90px}
//   .md .shadow-layer{width:62px;height:85px;top:-6px;left:-6px}
//   .md svg { width: 70px; height: 70px; margin-right: -12px;}
//   .md .brand-bar{height:52px; padding: 0 16px;}
//   .md .brand-text{font-size:28px}

//   /* Large (lg) */
//   .lg .haproven-icon{width:95px;height:125px}
//   .lg .main-bookmark{width:95px;height:125px}
//   .lg .shadow-layer{width:90px;height:120px;top:-8px;left:-10px}
//    .lg svg { width: 107px; height: 137px; margin-right: -36px;}
//   .lg .brand-bar{height:72px; padding: 0 18px;}
//   .lg .brand-text{font-size:48px}

//   /* ---- ANIMATION ---- */
//   .animate .path-line{
//     stroke-dasharray:260;
//     stroke-dashoffset:260;
//     animation:hapDraw 1s ease forwards;
//   }

//   @keyframes hapDraw{
//     to{stroke-dashoffset:0}
//   }
//   `;
//     document.head.appendChild(style);

//     /* -------- HTML -------- */
//     function initBrand(el) {
//         el.innerHTML = `
//       <div class="haproven-icon">
//         <div class="shadow-layer"></div>
//         <div class="main-bookmark">
//           <svg viewBox="0 0 100 100">
//             <path class="path-line"
//               d="M10 0 L10 70
//                  A10 10 0 0 0 30 70
//                  L30 20
//                  A10 10 0 0 1 50 20
//                  L50 70
//                  A16 9 0 0 0 70 80
//                  A13 20 0 0 1 80 94
//                  L100 95"/>
//           </svg>
//         </div>
//       </div>
//       <div class="brand-bar">
//         <span class="brand-text">Haproven</span>
//       </div>
//     `;
//     }

//     document.addEventListener("DOMContentLoaded", () => {
//         document.querySelectorAll(".haproven-brand").forEach(initBrand);
//     });

// })();







/* ===============================
   HAPROVEN BRAND COMPONENT
   usage:
   <div class="haproven-brand xs"></div>
   sizes: xs, sm, md, lg
    <div class="haproven-brand xs animate"></div>
    <div class="haproven-brand sm animate"></div>
    <div class="haproven-brand sm"></div>
    <div class="haproven-brand md"></div>
    <div class="haproven-brand lg"></div>
    <div class="haproven-brand sm icon-only"></div> <!-- icon only -->
================================ */

(function () {

    /* -------- CSS -------- */
    const style = document.createElement("style");
    style.innerHTML = `
  :root{
    --purple-dark:#bc1be7;
    --purple-light:#bc1be7;
  }

  .haproven-brand{
    display:flex;
    align-items:center;
    font-family:sans-serif;
  }

  /* ICON */
  .haproven-icon{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .haproven-icon .shadow-layer{
    position:absolute;
    background:var(--purple-light);
    clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
    border-radius:5px 5px 0 0;
    opacity:.45;
  }

  .haproven-icon .main-bookmark{
    position:relative;
    background:var(--purple-dark);
    clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
    border-radius:5px 5px 0 0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:2;
  }

  .haproven-icon svg{
    fill:none;
  }

  .haproven-icon .path-line{
    stroke:white;
    stroke-width:6;
    stroke-linecap:round;
    stroke-linejoin:round;
  }

  /* TEXT BAR */
  .brand-bar{
    background:#fff;
    border:6px solid var(--purple-dark);
    border-left:none;
    border-radius:0 10px 10px 0;
    display:flex;
    align-items:center;
    padding:0 18px;
    margin-left:5px;
  }

  .brand-text{
    font-weight:700;
    color:#000;
    white-space:nowrap;
  }

 .brand-bars{
    background:#00000000;
  }

 .brand-texts{
    color:#ffffff;
  }

  /* ---- SIZES ---- */
  /* Extra Small (xs) */
  .xs .haproven-icon{width:30px;height:40px}
  .xs .main-bookmark{width:30px;height:40px}
  .xs .shadow-layer{width:28px;height:38px;top:-3px;left:-3px}
  .xs svg {width: 35px;height: 35px;margin-right: -10px;}
  .xs .brand-bar {height: 23px; padding: 0 9px; border-width: 3px; max-width: 100px;}
  .xs .brand-text{font-size:14px}

  /* Small (sm) - HEIGHT REDUCED */
  .sm .haproven-icon{width:40px;height:55px}
  .sm .main-bookmark{width:32px;height:42px}
  .sm .shadow-layer{width:31px;height:44px;top:3px;left:0px}
  .sm svg {width: 38px;height: 49px;margin-right: -16px;}
  .sm .brand-bar{height:24px; padding: 0 5px; border-width: 3px; max-width:105px;}
  .sm .brand-text{font-size:18px}

  /* Medium (md) */
  .md .haproven-icon{width:65px;height:90px}
  .md .main-bookmark{width:65px;height:90px}
  .md .shadow-layer{width:62px;height:85px;top:-6px;left:-6px}
  .md svg { width: 70px; height: 70px; margin-right: -12px;}
  .md .brand-bar{height:52px; padding: 0 16px;}
  .md .brand-text{font-size:28px}

  /* Large (lg) */
  .lg .haproven-icon{width:95px;height:125px}
  .lg .main-bookmark{width:95px;height:125px}
  .lg .shadow-layer{width:90px;height:120px;top:-8px;left:-10px}
   .lg svg { width: 107px; height: 137px; margin-right: -36px;}
  .lg .brand-bar{height:72px; padding: 0 18px;}
  .lg .brand-text{font-size:48px}

  /* ---- ICON ONLY MODE ---- */
  .haproven-brand.icon-only .brand-bar {
    display: none;
  }
  
  .haproven-brand.icon-only .haproven-icon {
    margin-left: 0;
  }

  /* ---- ANIMATION ---- */
  .animate .path-line{
    stroke-dasharray:260;
    stroke-dashoffset:260;
    animation:hapDraw 1s ease forwards;
  }

  @keyframes hapDraw{
    to{stroke-dashoffset:0}
  }
  `;
    document.head.appendChild(style);

    /* -------- HTML -------- */
    function initBrand(el) {
        el.innerHTML = `
      <div class="haproven-icon">
        <div class="shadow-layer"></div>
        <div class="main-bookmark">
          <svg viewBox="0 0 100 100">
            <path class="path-line"
              d="M10 0 L10 70
                 A10 10 0 0 0 30 70
                 L30 20
                 A10 10 0 0 1 50 20
                 L50 70
                 A16 9 0 0 0 70 80
                 A13 20 0 0 1 80 94
                 L100 95"/>
          </svg>
        </div>
      </div>
      <div class="brand-bar">
        <span class="brand-text">Haproven</span>
      </div>
    `;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".haproven-brand").forEach(initBrand);
    });

})();




/* ===============================
   HAPROVEN BRAND COMPONENT
   usage:
   <div class="haproven-brand xs"></div>
   sizes: xs, sm, md, lg
    <div class="haproven-brand xs animate"></div>
    <div class="haproven-brand sm animate"></div>
    <div class="haproven-brand sm"></div>
    <div class="haproven-brand md"></div>
    <div class="haproven-brand lg"></div>
    <div class="haproven-brand sm icon-only"></div> <!-- icon only -->
================================ */

(function () {

    /* -------- CSS -------- */
    const style = document.createElement("style");
    style.innerHTML = `
  :root{
    --purple-dark:#bc1be7;
    --purple-light:#bc1be7;
  }

  .haproven-brand{
    display:flex;
    align-items:center;
    font-family:sans-serif;
    cursor: pointer;
  }

  /* ICON */
  .haproven-icon{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .haproven-icon .shadow-layer{
    position:absolute;
    background:var(--purple-light);
    clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
    border-radius:5px 5px 0 0;
    opacity:.45;
  }

  .haproven-icon .main-bookmark{
    position:relative;
    background:var(--purple-dark);
    clip-path:polygon(0 0,100% 0,100% 100%,50% 88%,0 100%);
    border-radius:5px 5px 0 0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:2;
  }

  .haproven-icon svg{
    fill:none;
  }

  .haproven-icon .path-line{
    stroke:white;
    stroke-width:6;
    stroke-linecap:round;
    stroke-linejoin:round;
  }

  /* TEXT BAR */
  .brand-bar{
    background:#fff;
    border:6px solid var(--purple-dark);
    border-left:none;
    border-radius:0 10px 10px 0;
    display:flex;
    align-items:center;
    padding:0 18px;
    margin-left:5px;
  }

  .brand-text{
    font-weight:700;
    color:#000;
    white-space:nowrap;
  }

 .brand-bars{
    background:#00000000;
  }

 .brand-texts{
    color:#ffffff;
  }

  /* ---- SIZES ---- */
  /* Extra Small (xs) */
  .xs .haproven-icon{width:30px;height:40px}
  .xs .main-bookmark{width:30px;height:40px}
  .xs .shadow-layer{width:28px;height:38px;top:-3px;left:-3px}
  .xs svg {width: 35px;height: 35px;margin-right: -10px;}
  .xs .brand-bar {height: 23px; padding: 0 9px; border-width: 3px; max-width: 100px;}
  .xs .brand-text{font-size:14px}

  /* Small (sm) - HEIGHT REDUCED */
  .sm .haproven-icon{width:40px;height:55px}
  .sm .main-bookmark{width:32px;height:42px}
  .sm .shadow-layer{width:31px;height:44px;top:3px;left:0px}
  .sm svg {width: 38px;height: 49px;margin-right: -16px;}
  .sm .brand-bar{height:24px; padding: 0 5px; border-width: 3px; max-width:105px;}
  .sm .brand-text{font-size:18px}

  /* Medium (md) */
  .md .haproven-icon{width:65px;height:90px}
  .md .main-bookmark{width:65px;height:90px}
  .md .shadow-layer{width:62px;height:85px;top:-6px;left:-6px}
  .md svg { width: 70px; height: 70px; margin-right: -12px;}
  .md .brand-bar{height:52px; padding: 0 16px;}
  .md .brand-text{font-size:28px}

  /* Large (lg) */
  .lg .haproven-icon{width:95px;height:125px}
  .lg .main-bookmark{width:95px;height:125px}
  .lg .shadow-layer{width:90px;height:120px;top:-8px;left:-10px}
   .lg svg { width: 107px; height: 137px; margin-right: -36px;}
  .lg .brand-bar{height:72px; padding: 0 18px;}
  .lg .brand-text{font-size:48px}

  /* ---- ICON ONLY MODE ---- */
  .haproven-brand.icon-only .brand-bar {
    display: none;
  }
  
  .haproven-brand.icon-only .haproven-icon {
    margin-left: 0;
  }

  /* ---- ANIMATION ---- */
  .animate .path-line{
    stroke-dasharray:260;
    stroke-dashoffset:260;
    animation:hapDraw 1s ease forwards;
  }

  /* ---- HOVER ANIMATION ---- */
  .haproven-brand:hover .path-line {
    stroke-dasharray: 260;
    stroke-dashoffset: 260;
    animation: hapDraw 1s ease forwards;
  }

  /* Smooth transition for non-animated states */
  .haproven-brand .path-line {
    transition: stroke-dashoffset 0.5s ease;
  }

  @keyframes hapDraw{
    0% {
      stroke-dashoffset: 260;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  /* Reset animation on hover out for re-animation */
  .haproven-brand:not(:hover) .path-line {
    animation: none;
  }
  `;
    document.head.appendChild(style);

    /* -------- HTML -------- */
    function initBrand(el) {
        el.innerHTML = `
      <div class="haproven-icon">
        <div class="shadow-layer"></div>
        <div class="main-bookmark">
          <svg viewBox="0 0 100 100">
            <path class="path-line"
              d="M10 0 L10 70
                 A10 10 0 0 0 30 70
                 L30 20
                 A10 10 0 0 1 50 20
                 L50 70
                 A16 9 0 0 0 70 80
                 A13 20 0 0 1 80 94
                 L100 95"/>
          </svg>
        </div>
      </div>
      <div class="brand-bar">
        <span class="brand-text">Haproven</span>
      </div>
    `;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".haproven-brand").forEach(initBrand);
    });

})();
