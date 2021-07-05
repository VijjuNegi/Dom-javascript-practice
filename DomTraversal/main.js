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


// nextSibling & previousSibling
let nxtsbling = document.querySelector("#child-c").nextElementSibling;
console.log(nxtsbling);
let nxtsbling = document.querySelector("#child-c").previousSibling;
console.log(nxtsbling);


// Dom Append Methods
let elementTag = document.createElement("h2");
console.log(elementTag);


let newText = document.createTextNode("JavaScript is great languages");
console.log(newText);


let newComment = document.createComment("this is just a comment");
console.log(newComment);


elementTag.appendChild(newText);
document.querySelector("#inner").appendChild(elementTag);