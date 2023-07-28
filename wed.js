var a=document.querySelector("#nav3 #men");
var b=document.querySelector("#menu")
var c=document.querySelector("#menu i")
a.addEventListener("click",function(){
    b.style.left="0"
    
})
c.addEventListener("click",function(){
    b.style.left="-100%"
    
})
var a=gsap.timeline(0.3)
a.from("#nav h2",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.1,
   
    
})
a.from("#nav2 h4",{
    y:-30,
    opacity:0,
    duration:0.1,
    stagger:0.2
    
})
a.from("#nav3",{
    y:-30,
    opacity:0,
    duration:0.1,
    
})
a.from("#nav3 h4",{
    y:-30,
    opacity:0,
    duration:0.1,
    stagger:0.1
    
})
a.from("#nav3 button",{
    y:-30,
    opacity:0,
    duration:0.1,
    
    
})
.from("#cen h1",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.3
})
.from("#cen h4",{
    opacity:0,
    y:20,
    scale:1.2,
    duration:0.3
})
.from("img",{
    scale:0.8,
    opacity:0,
    duration:0.7
})
var m=gsap.timeline({
    scrollTrigger:{
        trigger:"#nad h1",
        scroller:"body",
       
        start:"top 80%"
    }
})
m.from("#nad h1",{
    opacity:0,
    y:40,
    scale:1.2,
})
m.from("#nad p",{
    opacity:0,
    y:20,
    scale:1.2,
    duration:0.3
})
gsap.from(".elem ",{
    scale:0.8,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
       
        start:"top 70%"
    }
    
})

