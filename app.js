"use strict"

let corusel = document.querySelector(".corusel_list"),
   coruselitem = document.querySelectorAll(".corusel-item"),
   next = document.querySelector(".next"),
   prev = document.querySelector(".prev");

let index = 0;

function slider() {
   if (index > coruselitem.length - 1) {
      index = 0
   }

   if (index < 0) {
      index = coruselitem.length - 1
   }

   corusel.style.transform = `translateX(${-index * 850}px)`
}

let play = setInterval(() => {
   index++
   // slider()
}, 4000);

next.addEventListener("click", () => {
   index++;
   slider()
   clearInterval(play)
})

prev.addEventListener("click", () => {
   index--;
   slider()
   clearInterval(play)
})
