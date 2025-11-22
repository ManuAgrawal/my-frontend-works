var t1= gsap.timeline({
    scrollTrigger :{
        trigger: "#Home",
        start: "top top",
        markers: true,
        pin:true,
        scrub:1

    }
})

t1
   .to("#circle #btm img",{
    rotate: "-180deg",
    scale: 1,
    duration:1,
    stagger:.1,
    ease: Power1
    },"hello")
    .to("#circle #top img",{
    scale: 1,
    duration:1,
    stagger:.1,
    ease: Power1
    },"hello")

    .to("#cimage img",{
    scale: "0",
    duration:1,
    stagger:.1,
    ease: Power1
    },"hello")

    .to("#centerimg h5",{
    opacity: "0",
    stagger:.1,
    ease: Power1
    },"hello")

    .to("#circle",{
    scale:0.5,
    ease: Power1
    },"hello")

    .to("#smcircle",{
    scale:0,
    ease: Power1
    },"hello2")
    .to("#circle",{
    scale:0,
    ease: Power1
    },"hello2")
