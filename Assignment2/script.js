"use strict"

// create a function that when is clicked, it disables the div

function toggleMenu() {
    console.log("toggleMenu");
    let menuBox1 = document.getElementById('top-frame-15');
    menuBox1.classList.toggle('hide');
    let menuBox2 = document.getElementById('bottom-frame-15');
    menuBox2.classList.toggle('hide');
}

function Gotop() {
    window.scrollTo({top:0,behavior:'smooth'});
}

function toggleburger() {
    let menuBox = document.getElementById('menubox');
    menuBox.classList.toggle('active');
}
