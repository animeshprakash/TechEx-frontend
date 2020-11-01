const findSec = (index) =>{
    switch(index){
        case 0 : return(".sec1");break;
        case 1 : return(".sec2");break;
        case 2 : return(".sec3");break;
        case 3 : return(".sec4");break;
        case 4 : return(".sec5");break;
    }
}



new fullpage('#fullpage',{
    menu: '#menu',
    navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop:'30px',
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    onLeave: (origin,destination,direction)=>{
        let sec = findSec(destination.index);
        let secPrev = findSec(origin.index);
        const back = gsap.timeline({defaults:{ease:"power1.out"}});
        const startPoint = destination.item;
        console.log(direction)
        if(destination.isFirst){
            back.pause()
        }else if(direction==="down"){
            if(!(destination.isLast )){

            // back.fromTo('.sectionContainer',{rotation: 5},{rotation: 0,duration: 1,delay: 0.7});
            back.fromTo(sec,{rotation: -5},{rotation: 0,duration: 1,delay: 0.7});
    
            } 

            if(!(origin.isFirst)){
                // back.fromTo('.sectionContainer',{rotation: -5},{rotation: 0,duration: 1,delay: 0.7},"-=1.7");
                back.fromTo(secPrev,{rotation: 0},{rotation: 5,duration: 1,delay: 0},'-=1.7'); 
            } 

        }
        else if(direction==="up"){
            if(!(destination.isFirst)){

            // back.fromTo('.sectionContainer',{rotation: -5},{rotation: 0,duration: 1,delay: 0.7});    
            back.fromTo(sec,{rotation: 5},{rotation: 0,duration: 1,delay: 1});
                if(!(origin.isLast)){
                back.fromTo(secPrev,{rotation: 0},{rotation: -5,duration: 1,delay: 0});   
                }
            } 
        }
    }

    
});

fullpage_api.setScrollingSpeed(2000);
const timeline = gsap.timeline({defaults:{ease:"power1.out"}});
timeline.fromTo("nav",{opacity: 0},{opacity: 1,duration: 1.5,})
    .to("#scroll",{opacity:1, duration: 1,delay:.3},"-=1")
    .fromTo("#logo",{opacity:0 ,y:"+3%"},{opacity:1,y:"0%",duration: 0.4},"-=1.3");
