window.onload = ()=>{
    let block = document.getElementById("myBlock");
    let PositionX = 0;
    let PositionY = 0;
    let step = 10;

    document.addEventListener("keydown", function(event) {
        if (event.code  === "ArrowLeft") {
            PositionX -= step;
            block.style.left = PositionX + "px";
        } else if (event.code  === "ArrowRight") {
            PositionX += step;
            block.style.left = PositionX + "px";
        } else if (event.code  === "ArrowUp") {
            PositionY -= step;
            block.style.top = PositionY + "px";
        } else if (event.code  === "ArrowDown") {
            PositionY += step;
            block.style.top = PositionY + "px";
        }
    });
}
