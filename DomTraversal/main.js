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



let target = document.querySelector("#inner");
target.insertBefore(elementTag,target.childNodes[0]);
console.log(target);




// insertAdjacentElement
let newElement = document.createElement("h2");
let newText = document.createTextNode("java script a best languages");
newElement.appendChild(newText);

let target = document.querySelector("#test");
  
target.insertAdjacentElement("beforebegin", newElement);
target.insertAdjacentElement("afterbegin" , newElement);
console.log(target);



  // insertAdjacentHTML

 let target = document.querySelector("#test");
 let newHtml = "<h2>java script is great languages</h2>"
 target.insertAdjacentHTML("beforeend", newHtml);
//  target.insertAdjacentHTML("afterEnd", newHtml);
 console.log(target);



 // insertAdjacentText
 let target = document.querySelector("#test");
 let newText = "JavaScript is a best";
 target.insertAdjacentText("beforeend", newText);
 console.log(target);



 // replaceChild & removeChild
let newElement = document.createElement("li");
let newText = document.createTextNode("Guava");

newElement.appendChild(newText);

let target = document.querySelector("#list");
let oldElement = target.children[2];
target.replaceChild(newElement,oldElement);


let target = document.querySelector("#list");
let oldElement = target.children[3];
target.removeChild(oldElement);



// cloneNode
let target = document.querySelector("#list").children[1];
let cpyElement = target.cloneNode(true);

document.querySelector("#listOne").appendChild(cpyElement);




// contains
let parentElement = document.querySelector("#test");
let target = document.querySelector("#testPrgph");

let find = parentElement.contains(target);
console.log(find);



// hasAttribute
let hasAtt =  document.querySelector("#test");
let target = hasAtt.hasAttribute("class");
console.log(target);



// hasChildNodes
let hasAttNds =  document.querySelector("#test");
let target = hasAttNds.hasChildNodes();
console.log(target);
