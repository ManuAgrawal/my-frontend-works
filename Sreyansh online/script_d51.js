gsap.from("#page1 #box",{
    scale:3,
    rotation:180,
    // opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
})
gsap.from("#page2 #box",{
    rotation:360,
    scale:0.1,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 20%",   
        // scrub:true,
        // pin:true
    }
})
gsap.from("#page3 #box",{
    x:-200,
    scale:0.5,
    rotation:360,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 70%",
        // pin:true
    }
})