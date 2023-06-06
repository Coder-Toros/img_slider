const images = document.querySelectorAll(".img-min");
let count = 0; // переменная, которая указывает на номер активного изображения в images

const bigImage = document.querySelector(".img-max");

const next = document.querySelector(".next");
next.onclick = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;

const reset = document.querySelector(".reset");
reset.onclick = resetFunction;

function nextFunction() {
  if (count + 1 < images.length) {
    count = count + 1;
  } else {
    count = 0;
  }

  for (i = 0; i < images.length; i = i + 1) {
    images[i].classList.remove("active-img");
  }

  images[count].classList.add("active-img");
  bigImage.src = images[count].src;
}

function prevFunction() {
  if (count - 1 >= 0) {
    count = count - 1;
  } else {
    count = images.length - 1;
  }

  for (i = 0; i < images.length; i = i + 1) {
    images[i].classList.remove("active-img");
  }

  images[count].classList.add("active-img");
  bigImage.src = images[count].src;
}

function resetFunction() {
  count = 0;

  for (i = 0; i < images.length; i = i + 1) {
    images[i].classList.remove("active-img");
  }

  images[count].classList.add("active-img");
  bigImage.src = images[count].src;
}

// ваше событие здесь!!!
document.querySelector(".next").addEventListener("touch", nextFunction);
document.querySelector(".prev").addEventListener("touch", prevFunction);
document.querySelector(".reset").addEventListener("touch", resetFunction);
