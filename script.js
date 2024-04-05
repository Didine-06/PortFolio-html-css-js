var hamberger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamberger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

let PreLoader =  document.querySelector('.center');
let hero =  document.querySelector('.hero');

window.addEventListener('load', function(){
    PreLoader.classList.add('none');
    hero.classList.add('non');
})

let btn = document.querySelector(".service .card");

btn.onclick = ()=>{
    location = "works.html";
}