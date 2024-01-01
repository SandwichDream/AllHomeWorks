let stringText = "How cats, rats, and bats become Halloween animals";
console.log(stringText.match(/[cbr]ats/g));

let emailAddress = "emFail.example@example.com";
let emailPattern = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,5}$/;
console.log(emailPattern.test(emailAddress));



let date = "63-22-2050";
let regDate = /^\d{1,2}-\d{1,2}-\d{4}$/;
console.log(regDate.test(date));

console.log()

window.onload = ()=>{
    let obj = {
        userName: "John",
        age: 21
    }
    try{
        if(!obj.city){
            throw new SyntaxError("Dont have City")
        }
    }
    catch(e){
        console.log(e);
    }
    finally{
        alert("final")
    }
    let pEl = document.querySelector('p');
    let read = document.querySelector('.read');
    let write = document.querySelector('.write');

    read.onclick = function() {
        pEl.innerHTML = `${window.sessionStorage.length}`
        pEl.innerHTML += `<br>`;
        pEl.innerHTML += `${window.sessionStorage.key2} and ${window.sessionStorage.key1} and ${window.sessionStorage["key3"]}`;
    };
    write.onclick = function() {
        window.sessionStorage.setItem("key1", "Key 1 value");
        window.sessionStorage.key2 = "Key 2 value";
        window.sessionStorage["key3"] = "Key 3 value";
    }
}