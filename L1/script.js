// gsap.to("#box1", {
//   x: 200,
//   duration: 1,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 200,
//   duration: 1,
//   delay: 2,
// });

// gsap.to("#box3", {
//   x: 200,
//   duration: 1,
//   delay: 5,
// });

const tl = gsap.timeline();

tl.to("#box1", {
  x: 800,
  duration: 1,
  rotate: 360,
  delay: 1,
});
tl.to("#box2", {
  x: 400,
  duration: 1,
  rotate: 360,
});
tl.to("#box3", {
  x: 200,
  duration: 1,
  rotate: 360,
});
