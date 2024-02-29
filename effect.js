const icones = document.querySelectorAll(".icone")


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





document.getElementById("#square").forEach(function(square){
        square.addEventListener("click",function(){
        if(square.getElementById == "square"){
            documentdocument.getElementById("#square").style.transform = 'border-radius: 0%;';
            documentdocument.getElementById("#square").toggle("square") 
            documentdocument.getElementById("#square").toggle("squareBis")
            
        }else{
            square.style.transform = 'border-radius: 25%;';
            documentdocument.getElementById("#square").toggle("square")
            documentdocument.getElementById("#square").toggle("squareBis")
            
        }

    })
   
});