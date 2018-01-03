'use strict';

console.log('>> Ready :)');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/*
var boxAccordion = document.querySelector('.box-accordion');
var i;

for (i = 0; i < boxAccordion.length; i++) {
    boxAccordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var contentAccordion = this.nextElementSibling;
        if (contentAccordion.style.display === "block") {
            contentAccordion.style.display = "none";
        } else {
            contentAccordion.style.display = "block";
        }
    });
}

function showContent(event) {
  var content = document.querySelectorAll('.content-accordion');
  var idButton = event.currentTarget.getAttribute('data-id');
  content[idButton].classList.toggle('hidden');
}

var editButton = document.querySelectorAll('.box-accordion');
for (var i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener('click', showContent);
};
*/

//MENU TRIGGER

function init(){
  var menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', menuTrigger);
}

function menuTrigger(){
  var menuHidden = document.querySelector('.nav-list');
  menuHidden.classList.toggle('active');
}

init();
