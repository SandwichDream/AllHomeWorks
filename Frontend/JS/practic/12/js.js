window.onload = function (){
    let output = document.querySelector("p");
    let divEl = document.querySelector(".drag");
    divEl.addEventListener("dragstart", function(e){
        console.log(e);
        output.innerHTML = "Drag event start";
    });
    // divEl.addEventListener("drag", function(e){
    //     console.log(e);
    //     output.innerHTML = "Drag event progress";
    // });
    // divEl.addEventListener("dragend", function(e){
    //     console.log(e);
    //     output.innerHTML = "Drag event end";
    // });
    let dropArea = document.querySelector(".dragArea");
    dropArea.addEventListener("dragover", function(e){
        e.preventDefault();
        console.log(e, `dragover`);
    });
    dropArea.addEventListener("drop", function(e){
        e.preventDefault();
        this.innerHTML = `Ви перемістили блок`
    })
}