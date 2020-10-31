new fullpage('#fullpage',{
    menu: '#menu',
    navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop:'30px',
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    onLeave: (origin,destination,direction)=>{
        
        const back = gsap.timeline({defaults:{ease:"power4.out"}});
        const startPoint = destination.item;
        console.log(direction)
        if(startPoint===noRotate || direction=='up'){
            back.pause()
        }else{
            back.resume()
            back.fromTo('.bg',{rotation: -5},{rotation: 1,duration: 1,delay: 0.3});
            back.fromTo('.sectionContainer',{opacity:0, y:'-10%'},{opacity:1, y:'0',duration: 1},"-=0.8")
            document.getElementById("phoneImg").focus = ()=>{
                
            }
        }
    }
});
const timeline = gsap.timeline({defaults:{ease:"power1.out"}});
const noRotate = document.querySelector("#s1.section");
timeline.fromTo("nav",{opacity: 0},{opacity: 1,duration: 1.5,})
    .to("#scroll",{opacity:1, duration: 1,delay:.3},"-=1")
    .fromTo("#logo",{opacity:0 ,y:"+3%"},{opacity:1,y:"0%",duration: 0.4},"-=1.3");
