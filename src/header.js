var header = document.getElementsByClassName("onglets")[0];

var offsetY = header.offsetTop;

function changeHeaderOnScroll() {
  if (window.pageYOffset > offsetY) {
    header.classList.add("onglets-out");
  } else {
    header.classList.remove("onglets-out");
  }
}

window.onscroll = () => {
    changeHeaderOnScroll();
  };