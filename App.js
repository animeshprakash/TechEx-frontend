const timeline = gsap.timeline({defaults:{ease:"power1.out"}});
timeline.fromTo("nav",{opacity: 0},{opacity: 1,duration: 1,})
timeline.to("#scroll",{opacity:1, duration: 1,delay:.3},"-=1");
timeline.fromTo("#logo",{opacity:0 ,y:"+3%"},{opacity:1,y:"0%",duration: 0.4},"-=1");
new fullpage('#fullpage',{
    menu: '#menu',
    navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop:'30px',
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    onLeave: (origin,destination,direction)=>{
        const startPoint = destination.item;
        
    }
});