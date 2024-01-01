let posts = [
    {id:1, text:"Hello"},
    {id:2, text:"World"}
];
function getData(){
    setTimeout(function(){
        let dataItem = "";
        posts.forEach(function(post){
            dataItem += `<P>${post.text}</P>`
        });
        document.body.innerHTML = dataItem;
    }, 1000);
}
function createData(post, callBackFn){
    setTimeout(function(){
        posts.push(post);
        callBackFn();
    }, 2000)
}
getData();

createData({id:3, text:"Hello"}, getData);