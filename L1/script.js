gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 1.5,
});

gsap.from("#box2", {
  x: 1000,
  //   y: 500,
  duration: 2,
  delay: 1,
});

gsap.from("h1", {
  y: 30,
  duration: 1,
  delay: 1,
  color: "blue",
  opacity: 0,
  stagger: -1,
});
