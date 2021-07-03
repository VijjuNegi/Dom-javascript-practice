// parentElement
let prnt = document.querySelector("#child-c").parentElement.style.background="red";
console.log(prnt);



// children & childNodes
let cldn = document.querySelector("#inner").children[1];
document.querySelector("#inner").children[1].style.background = "#5f5f5f";
console.log(cldn);