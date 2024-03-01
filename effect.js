const icones = document.querySelectorAll(".icone")
const squares = document.querySelectorAll(".square")
const texts = document.querySelectorAll(".text")


icones.forEach(function(icone){
        icone.addEventListener("click",function(){
        if(icone.classList == "icone"){
            icone.style.transform = 'rotate(360deg)';
            icone.classList.toggle("icone") 
            icone.classList.toggle("iconeBis")
            
        }else{
            icone.style.transform = 'rotate(0deg)';
            icone.classList.toggle("icone")
            icone.classList.toggle("iconeBis")
            
        }

    })
   
});



squares.forEach(function(square){
    square.addEventListener("click",function(){
        if(square.classList == "square"){
            square.classList.toggle("square") 
            square.classList.toggle("squareBis")
        
        }else{
            square.classList.toggle("square")
            square.classList.toggle("squareBis")
        
        }

    })
   
});


texts.forEach(function(text){
    text.addEventListener("click",function(){
        if(text.classList == "text"){
            text.classList.toggle("text")
            text.classList.toggle("textBis")

        }else{
            text.classList.toggle("text")
            text.classList.toggle("textBis")

        }
    })

});

const click = document.body
click.onclick = function(){
 document.documentElement.style.backgroundColor = "red"
click.style.backgroundColor =  "rgba(160, 160, 160, 0)"

}
