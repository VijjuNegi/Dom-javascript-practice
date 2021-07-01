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


// querySelector all
    let qrySlctor = document.querySelectorAll(".list")[0].innerHTML = "<h1>javascript is a Great language</h1>";
    document.querySelectorAll("#text").getAttribute("class");
    document.querySelectorAll(".list")
    console.log(qrySlctor);



// querySelector with style
    let sty = document.querySelector("#text").style.color;
    console.log(sty);
    document.querySelector("#text").style.backgroundColor = "red";
    let bgclr = document.querySelector("#text").getAttribute("style");
    console.log(bgclr);



//  querySelector style with className
    document.querySelector("#text").className = "abc xyz";
    let qSsty = document.querySelector("#text").className;
    console.log(qSsty);


// style with classList 

        document.querySelector("#text").classList = "abcd xyz";
        let clsList = document.querySelector("#text").classList;
        console.log(clsList);


// style with classList.add
    document.querySelector("#text").classList.add("anyClass", "anyabc");
    let clsAdd = document.querySelector("#text").classList;
    console.log(clsAdd);



// style with classList.remove
    document.querySelector("#text").classList.remove("anyClass", "textOne");
    let clsRemove = document.querySelector("#text").classList;
    console.log(clsRemove);



// Events with classList Add
    document.querySelector("#text").onmouseenter = anyFun;
    function anyFun() {
        document.querySelector("#text").classList.add("bgColor");
    }

 // Events with classList Remove
    document.querySelector("#text").onclick = bgColorFun;
    function bgColorFun() {
    document.querySelector("#text").classList.remove("bgColor");
    }




// addEventListener
    document.querySelector("#text").addEventListener("mouseenter", abcFun);
    function abcFun() {
        document.querySelector("#text").classList.add("bgColor", "bgborders");
    }
    // sort hand
    document.querySelector("#text").addEventListener("click", function () {
         this.classList.remove("bgColor");
    });


// addEventListener classList Toggle
    document.querySelector("#text").addEventListener("click", function () {
        this.classList.toggle("bgColor");
    })
 
// addEventListener classList length
    let clsListLength = document.querySelector("#text").classList.length;
    console.log(clsListLength); 
    
    
// classList item
    let clsListItem = document.querySelector("#text").classList.item(2);
    console.log(clsListItem);



// class List contains
    let clsListConts = document.querySelector("#text").classList.contains("abc");
    console.log(clsListConts);