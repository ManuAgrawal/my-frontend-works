var arr=[
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388", img:"https://images.unsplash.com/photo-1583429801731-c87234aa1238?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464", img:"https://images.unsplash.com/photo-1678630401136-9f27e5720943?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388"},
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", img:"https://plus.unsplash.com/premium_photo-1664464228924-a9356b067eaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"}
]


var clutter=""
arr.forEach(function(ele,index){
    clutter+=`<div class="story">
                    <img id="${index}" src="${ele.dp}" alt="">
                </div>`
});

document.querySelector("#storiya").innerHTML=clutter;

document.querySelector("#storiya").addEventListener("click", function(detail){
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen ").style.backgroundImage=`url(${arr[detail.target.id].img})`;
});