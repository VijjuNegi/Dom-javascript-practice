function createHeart(){
    const heart = document.createElement("img");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    // heart.innerHtml = "<img src='like.png'/>";
    heart.src="like.png"
    document.body.appendChild(heart);
}
setInterval(createHeart, 300);