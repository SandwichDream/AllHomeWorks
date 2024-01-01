window.onload = ()=>{
    let ipuntEl = document.querySelector(".A1>input");
    let btnEl = document.querySelector(".A1>button");

    btnEl.addEventListener("click", function(){
        console.log(ipuntEl.value);
        ipuntEl.value = "";
    })

    let mouse = document.querySelector(".mouse");

    mouse.addEventListener("mousemove", handler);

    function handler(e){
        let infoText = "";
        infoText = `Alt ${e.altKey} Ctrl ${e.ctrlKey} Shift ${e.shiftKey} X cordinate ${e.clientX} Y cordinate ${e.clientY}`;
        mouse.textContent = infoText;
    }

    let hoverEl = document.querySelector(".hover");
    let headerEl = document.querySelector("header");

    hoverEl.onmouseover = function(){
        this.style.backgroundColor = "red";
        headerEl.style.backgroundColor = "gray";
    }
    hoverEl.onmouseout = function(){
        this.style.backgroundColor = "green";
        headerEl.style.backgroundColor = "pink";
    }

    let mousemoveEl = document.querySelector(".on_mouse_move");
    let mouseDown = document.querySelector(".on_mouse_down");
    let mouseUp = document.querySelector(".on_mouse_up");

    mousemoveEl.onmousemove = function(e){
        this.textContent = `Event ${e.offsetX} : ${e.offsetY} X cordinate ${e.clientX} Y cordinate ${e.clientY}`;
    }

    mouseDown.onmousedown = function(e){
        this.textContent = `Event ${e.offsetX} : ${e.offsetY} X cordinate ${e.clientX} Y cordinate ${e.clientY}`;
    }

    mouseUp.onmouseup = function(e){
        this.textContent = `Event ${e.offsetX} : ${e.offsetY} X cordinate ${e.clientX} Y cordinate ${e.clientY}`;
    }
}