// gsap.to("#box",{
//     duration:2,
//     x:300,
//     ease:Expo.easeInOut
// })

// ----------------------------------------------------------------------------------------------------------

// gsap.from("#box",{
//     duration:2,
//     x:300,
//     y:200,
//     rotation:360,
//     ease:Expo.easeInOut
// })

// --------------------------------------------------------------------------------------------------------------------
gsap.fromTo("#box",{
    x:200,
    y:100,
    ease:Expo.easeInOut
},{
    duration:2,
    x:300,
    y:200,
    backgroundColor:"purple",
    ease:Expo.easeInOut,
        // onComplete: function(){
        //     alert("Animation Complete");
    // }

    onUpdate: function(){
      console.log("hey");
    }
    // onComplete,onStart,onUpdate,onProgress are call back functions
})

// -------------------------------------------------------------------------------------------------------------------------