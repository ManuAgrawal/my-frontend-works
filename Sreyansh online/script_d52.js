var menu = document.querySelector("#nav-part2 i");
var full = document.querySelector("#fullscreen-nav");

var flag=0;
menu.addEventListener("click", function() {
    
    if(flag==0){
        full.style.top = "0%";
    document.querySelector("#nav h2").style.color = "#222";
    document.querySelector("#nav h3").style.color = "#222";
    document.querySelector("#nav i").style.color = "#222";
    flag=1;
    }
    else{
        full.style.top = "-100%";
    document.querySelector("#nav h2").style.color = "#dadada";
    document.querySelector("#nav h3").style.color = "#dadada";
    document.querySelector("#nav i").style.color = "#dadada ";
    flag=0;
    }
});

var t1= gsap.timeline()

t1.from("#page1 h1",{
    y:60,
    duration:0.7,
    opacity:0
})
.from("#page1 h2",{
    y:40,
    duration:0.5,
    opacity:0,
    delay:"-0.3"
})
.from("#page1 h3",{
    y:40,
    duration:0.5,
    opacity:0,
    delay:"-0.3"
})

gsap.to("#page2 img",{
    scale:1.12,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 img",
        // scroller:"#body",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:4
        }
})

gsap.from("#page2 h1",{
    scale:0.5,
    y:-50,
    rotateX:"-100deg",   
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h1",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
})

