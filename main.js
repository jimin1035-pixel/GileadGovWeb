const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const search = document.querySelector('.navbar__search');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    search.classList.toggle('active');


});

document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.getElementById("toggleBtn");
    var moveintro = document.querySelector(".moveintro");
  
    toggleBtn.addEventListener("click", function() {
      moveintro.classList.toggle("moveintro-down");
    });
  });
  