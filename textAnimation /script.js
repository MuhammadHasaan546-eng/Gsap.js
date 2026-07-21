function brackText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  console.log(h1Text);

  let split = h1Text.split("");
  let clutter = ``;
  console.log(split);
  let halfSplit = Math.floor(split.length / 2);
  console.log(halfSplit);
  split.forEach(function (e, index) {
    if (index < halfSplit) {
      clutter += `<span class="first-half">${e}</span>`;
    } else {
      clutter += `<span class="second-half">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

brackText();

gsap.from(".first-half", {
  y: 70,
  duration: 0.8,
  delay: 1,
  stagger: 0.15,
  opacity: 0,
});

gsap.from(".second-half", {
  y: 70,
  duration: 0.8,
  delay: 1,
  stagger: -0.15,
  opacity: 0,
});
