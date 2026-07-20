// // gsap.to("#box1", {
// //   x: 200,
// //   duration: 1,
// //   delay: 1,
// // });

// // gsap.to("#box2", {
// //   x: 200,
// //   duration: 1,
// //   delay: 2,
// // });

// // gsap.to("#box3", {
// //   x: 200,
// //   duration: 1,
// //   delay: 5,
// // });

// const tl = gsap.timeline();

// tl.to("#box1", {
//   x: 800,
//   duration: 1,
//   rotate: 360,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 400,
//   duration: 1,
//   rotate: 360,
// });
// tl.to("#box3", {
//   x: 200,
//   duration: 1,
//   rotate: 360,
// });

const tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

tl.from(".part2 h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

tl.from("h1", {
  opacity: 0,
  duration: 2,
  scale: 0.3,
});
