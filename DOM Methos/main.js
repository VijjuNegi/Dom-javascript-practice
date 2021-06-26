// Dom get methods
let textInner = document.getElementById("text").innerText;
console.log(textInner);


let getAtt = document.getElementById("text").getAttribute("class");
console.log(getAtt);

let attribute = document.getElementById("text").attributes[2].name;
console.log(attribute);
