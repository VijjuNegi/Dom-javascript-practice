// parentElement
let prnt = document.querySelector("#child-c").parentElement.style.background="red";
console.log(prnt);



// children & childNodes
let cldn = document.querySelector("#inner").children[1];
document.querySelector("#inner").children[1].style.background = "#5f5f5f";
console.log(cldn);

let cldn = document.querySelector("#inner").childNodes[5].style.background = "#5f5f5f";
document.querySelector("#inner").childNodes[1].style.background = "#5f5f5f";
console.log(cldn);


// firstElementChild & lastElementChild
let fstElecld = document.querySelector("#outer").firstElementChild.style.background = "#5f5f5f";
console.log(fstElecld);

let fstEleclds = document.querySelector("#inner").lastElementChild.style.background = "#5f5f5f";
console.log(fstEleclds);