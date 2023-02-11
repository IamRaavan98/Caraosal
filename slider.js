const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")
let slideNumber = 0
let length = images.length



right.addEventListener("click",()=>{
    slideNumber++
    if(slideNumber <= length){
        if(slideNumber === length){
            slideNumber = 0
        }
        slider.style.transform = `translateX(-${slideNumber * 800}px)`
        resetBackGround();
        buttons[slideNumber].style.backgroundColor = "#fff";
    }
})
left.addEventListener("click",()=>{
    if(slideNumber > 0){
        slideNumber--
        slider.style.transform = `translateX(-${slideNumber * 800}px)`
        resetBackGround();
        buttons[slideNumber].style.backgroundColor = "#fff";
    }
    
    else if(slideNumber === 0){
        slideNumber = 3
        slider.style.transform = `translateX(-${slideNumber * 800}px)`  
        resetBackGround();
        buttons[slideNumber].style.backgroundColor = "#fff";

    }
})


// adding buttons for each images
for (let i = 0 ; i<length;i++) {
    const div = document.createElement("div");
div.className = "button"
bottom.appendChild(div)

}



const buttons = document.querySelectorAll(".button")

const resetBackGround = ()=>{
  buttons.forEach((button)=>{
    button.style.backgroundColor = "transparent";
  })  
}


    buttons[0].style.backgroundColor = '#fff'
    buttons.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            resetBackGround();
            button.style.backgroundColor = "#fff"
        slider.style.transform = `translateX(-${index * 800}px)`;
        
       })
    })
