var tl= gsap.timeline();

gsap.set(".a",{ opacity:0, y:20 });
gsap.set("#right>img",{ opacity:0, y:20,scale:1.6 });


tl.from("#left",{
    duration:1.5,
    width:0,
    ease:Expo.easeInOut
})

tl.from("#right",{
    duration:1.5,
    width:0,
    ease:Expo.easeInOut
})
tl.to(".a",{
    opacity:1,
    y:0,
    delay:-1,
    stagger:0.1,
    duration:1.5,
    ease:Expo.easeInOut
})
tl.to("#right>img",{
    delay:-1,
    opacity:1,
    y:0,
    scale:1,
    duration:1.5,
    ease:Expo.easeInOut
});

