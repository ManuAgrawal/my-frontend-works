var a= document.querySelector("h1");
a.innerHTML="hey ,whats up";
a.style.color="red";

//event listener
a.addEventListener("click",function(){
    a.style.color="blue";
    a.style.backgroundColor="yellow";
});

