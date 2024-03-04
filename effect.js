

function toggleClass(element, classRemoved, classAdded) {
    if (element.classList.contains(classRemoved)) {
        element.classList.toggle(classRemoved);
        element.classList.toggle(classAdded);
    } else {
        element.classList.toggle(classAdded);
        element.classList.toggle(classRemoved);
    }
}

const icones = document.querySelectorAll(".icone");
const squares = document.querySelectorAll(".square");
const texts = document.querySelectorAll(".text");
const initialBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");

squares.forEach(function(square) {
    square.addEventListener("click", function() {
        
        const backgroundColor = window.getComputedStyle(square).getPropertyValue("background-color");

        if (document.body.style.backgroundColor == backgroundColor) {
            document.body.style.backgroundColor = initialBackgroundColor;
            square.style.boxShadow = ""
        } else {
            document.body.style.backgroundColor = backgroundColor;
            square.style.boxShadow = `0px 50px 20px -40px ${backgroundColor}`;
        }



        icones.forEach(function(icone) {
            if (icone.parentElement == square) {
                toggleClass(icone, "icone", "iconeBis");
                icone.style.transform = (icone.classList.contains("icone")) ? 'rotate(0deg)' : 'rotate(360deg)';
            }
        });
        
        toggleClass(square, "square", "squareBis");
        
        texts.forEach(function(text) {
            if (text.parentElement == square) {
                toggleClass(text, "text", "textBis");
            }
        });
    });
});
