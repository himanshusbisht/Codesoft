'use strict';
const parallex=document.querySelector(".part1");
window.addEventListener("scroll",function(){
    let offset=window.scrollY;
    parallex.style.backgroundPositionY=offset*1+"px";
})