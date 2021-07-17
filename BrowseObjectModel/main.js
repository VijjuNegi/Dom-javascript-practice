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

// moveTo Window
var mywindows;
function openWindows(){
    mywindows = window.open("","","width=600px,Height=300px,left=500px,top=300px");
    mywindows.document.write("<p>Hello jaaScript</p>");
}
function moveWindows(){
    mywindows.moveTo(100,100);
}

// moveBy Window
var mywindows;
function openWindows(){
    mywindows = window.open("","","width=600px,Height=300px,left=500px,top=300px");
    mywindows.document.write("<p>Hello jaaScript</p>");
}
function moveWindows(){
    mywindows.moveBy(100,100);
}


// resize Windows
function resizeWindows(){
    mywindows.resizeTo(400,400);
}

function resizeByWindows(){
    mywindows.resizeBy(400,400);
}


//scrollToWindows

function scrollByWindows(){
    window.scrollBy(0,20);
}


function scrollToWindows(){
    window.scrollTo(0,0);
}

// file location
document.write(location);
document.write(location.host);
