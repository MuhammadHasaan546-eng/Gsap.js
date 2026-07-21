let path = `M 10 100 Q 250 100 990 100`;

let finalPath = `M 10 100 Q 250 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (e) {
  path = `M 10 100 Q ${e.x} ${e.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.5,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
