// innerHeight
const iHeight = window.innerHeight;
console.log(iHeight);


// OuterHeight
const oHeight = window.outerHeight;
console.log(oHeight);


// Open Windows
function openWindows(){
    window.open("https://www.google.com/","_parent");
}

// height & width
function openHeightWidth(){
    window.open("https://www.google.com/","","width=600px,Height=300px");
}

// closeWindow
var windows;
function openHeightWidth(){
    windows = window.open("https://www.google.com/","","width=600px,Height=300px,left=500px,top=300px");
}
function closeWindow(){
    windows.close();
}
