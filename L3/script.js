// Select custom cursor elements
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const hoverTargets = document.querySelectorAll(".hover-target");

// Center the cursor elements and hide them initially to avoid a starting jump at 0,0
gsap.set([cursorDot, cursorOutline], { 
  xPercent: -50, 
  yPercent: -50,
  autoAlpha: 0 
});

let isFirstMove = true;

// Track mouse movement
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  // Fade in cursors on the very first movement inside the window
  if (isFirstMove) {
    gsap.to([cursorDot, cursorOutline], {
      autoAlpha: 1,
      duration: 0.2
    });
    isFirstMove = false;
  }

  // Move the solid inner dot instantly/near-instantly
  gsap.to(cursorDot, {
    x: clientX,
    y: clientY,
    duration: 0.08,
    ease: "power2.out"
  });

  // Move the outer ring with a slight easing lag for a high-end feel
  gsap.to(cursorOutline, {
    x: clientX,
    y: clientY,
    duration: 0.4,
    ease: "power3.out"
  });
});

// Add cursor feedback when hovering over interactive elements
hoverTargets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    // Hide the dot and expand the outline with a subtle background blend
    gsap.to(cursorDot, {
      scale: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorOutline, {
      scale: 1.8,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "#ffffff",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  target.addEventListener("mouseleave", () => {
    // Return cursors to their normal scale and style
    gsap.to(cursorDot, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorOutline, {
      scale: 1,
      backgroundColor: "transparent",
      borderColor: "#ffffff",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});
