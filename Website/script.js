navbar = document.getElementById("navbar")
button = document.getElementById("open")

window.addEventListener("resize", function(){
    let width = window.innerWidth;
    if(width >= 730){
        navbar.style.left = 0;
        navbar.style.width = "8rem";
        button.id = "open";
    }
    if(width < 730 && button.id == "open"){
        navbar.style.left = "-10rem";
    };
    if(button.id == "close"){
        navbar.style.transition = 0;
        navbar.style.width = width+"px";
        navbae.style.transition = 0.5+"s";
    }
});

function moveNavbar(){
    if(button.id == "open"){
        navbar.style.width = window.innerWidth+"px";
        navbar.style.left = 0;
        button.id = "close";
        console.log(navbar.style.width, window.innerWidth);
    }
    else{
        navbar.style.left = "-10rem";
        button.id = "open";
        navbar.style.width = "8rem";
        console.log(button.id);
    };
};