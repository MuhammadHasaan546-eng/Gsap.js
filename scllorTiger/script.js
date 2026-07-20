gsap.from("#page1 #box", {
  scale: 0.5,
  //   opacity: 0,S
  duration: 1,
  delay: 1,
  rotate: 180,
});

gsap.from("#page2 #box", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
