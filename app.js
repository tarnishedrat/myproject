

let img = document.querySelector('img')

setInterval(() => {
    
    let ran = Math.floor(Math.random()*600)
    img.style.position ='absolute'
    img.style.top = ran +'px'
    img.style.left = ran +"px"
}, 1000);
