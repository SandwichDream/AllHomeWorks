window.onload = ()=>{
    document.querySelector(".text-block").addEventListener("copy", function(e){
        alert("Інфу не можна копіювати");
        e.preventDefault();
    });
    function checkInput(value, element){
        if(value.length<5){
            element.style.background = "red";
            element.style.color = "white";
        }
    }
    let [...formElements] = document.querySelector("form").elements;
    for(let i = 0; i<formElements.length; i++){
        formElements[i].onchange = function(){
            document.querySelector(".info").innerHTML = `Дані були змінені в інпуті ${this.name}`;
        }
    }
    for(let i = 0; i<formElements.length; i++){
        formElements[i].onfocus = function(){
            this.style.border = "5px solid red";
        }
        formElements[i].onblur = function(){
            this.style.border = "5px solid green";
        }
        formElements[i].oninput = function(){
           console.log(this.value);
           checkInput(this.value, this);
        }
    }
    document.querySelector("textarea").addEventListener("paste", function(e){
        alert("Введіть інфу вручну");
        e.preventDefault();
    });
    let docLocation = document.location;
    let protolType = document.location.protocol;
    let hostDate = document.location.host;
    let pathName = document.location.pathname;
    document.querySelector("h4").innerHTML = `Location ${docLocation} <br> ProtocolInfo ${protolType} <br> host info ${hostDate} <br> Path info ${pathName}`;
}