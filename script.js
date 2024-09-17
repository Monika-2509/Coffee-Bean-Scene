const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
const header = document.querySelector(".header")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active")
    
}

const navLink = document.querySelectorAll(".nav-items a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}

// Pagination

const card1right= document.querySelector("#right-1");
const card2right= document.querySelector("#right-2 ");
const card2left = document.querySelector("#left-2 ");
const card3left= document.querySelector("#left-3 ");
const card1=document.querySelector("#card-1");
const card2=document.querySelector("#card-2");
const card3=document.querySelector("#card-3");
card1right.addEventListener("click",(e)=>{
   card1.classList.add("hidden");
   card2.classList.remove("hidden");
   // moveSlide(1);
})
card2right.addEventListener("click",(e)=>{
    card2.classList.add("hidden");
    card3.classList.remove("hidden");
   //  moveSlide(1);
 })
 card2left.addEventListener("click",(e)=>{
    card2.classList.add("hidden");
    card1.classList.remove("hidden");
   //  moveSlide(-1);
 })
 card3left.addEventListener("click",(e)=>{
    card3.classList.add("hidden");
    card2.classList.remove("hidden");
   //  moveSlide(-1);
 })


 AOS.refresh();