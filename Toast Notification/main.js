const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () =>{
    crtNotification();
});

function crtNotification(){
    const notif = document.createElement("div");
    notif.classList.add('toast');

    notif.innerText = "hello java script";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);

    
}