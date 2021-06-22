const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    document.body.style.background = colorBg();
})

function colorBg(){
    const index = Math.floor(Math.random() * 5)
    const color = ["red","blue","green","orange","yellow","teal"][index]
    console.log(color,index)
    return color;
}