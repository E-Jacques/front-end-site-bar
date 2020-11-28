function animateObjects(ls, dt, w = Math.PI / 20, phase = Math.PI / 4) {
  for (let i = 0; i < ls.length; i++) {
    ls[i].style.opacity = Math.abs(Math.cos(w * t - i * phase));
  }
  t += dt;
  console.log(t);
}

var t = 0;
var animation = setInterval(() => {
  animateObjects(document.getElementsByClassName("arrow"), 1 / 60, 4);
}, Math.floor(1000 / 60));
