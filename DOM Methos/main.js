// Dom get methods 
let textInner = document.getElementById("text").innerText;
console.log(textInner);


let getAtt = document.getElementById("text").getAttribute("class");
console.log(getAtt);

let attribute = document.getElementById("text").attributes[2].name;
console.log(attribute);



// Dom set methods

    let setText = document.getElementsByTagName("p")[0].innerText = "javaScript a best languages";
    console.log(setText);

    let set = document.getElementById("text").innerHTML = "<h1>javascript is a Great language</h1>";
    console.log(set);


    document.getElementById("text").setAttribute("class", "bgColor");
    let getatt = document.getElementById("text").getAttribute("class");
    console.log(getatt);


// querySelector 
        document.querySelector("#text").innerHTML = "<h1>javascript is a Great language</h1>";
        let setAtt = document.querySelector("#text").getAttribute("class");
        console.log(setAtt);
