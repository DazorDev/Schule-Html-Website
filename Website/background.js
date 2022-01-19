canvas = document.getElementById("background")
ctx = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle{
    #radius;
    #posX;
    #posY;
    #accelerationX;
    #accelerationY;
    #color = "rgb(20,20,20,0.2)";
    constructor(){
        this.#radius = Math.random()*4
        this.#posX = Math.random()*canvas.width;
        this.#posY = Math.random()*canvas.height;
        this.#accelerationX = Math.random()*2-1;
        this.#accelerationY = Math.random()*2-1;
    }

    getX(){
        return this.#posX;
    }

    getY(){
        return this.#posY;
    }

    setColor(color){
        this.#color = color; 
    }

    setRadius(radius){
        this.#radius = radius;
    }

    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.#color
        ctx.arc(this.#posX,this.#posY,this.#radius,0,2*Math.PI)
        ctx.fill()
    }

    update(){
        this.#posX += this.#accelerationX;
        this.#posY += this.#accelerationY;
        if(this.#posX < 0 || this.#posX > canvas.width){
            this.#posX = Math.random()*canvas.width;
        }
        if(this.#posY < 0 || this.#posY > canvas.height){
            this.#posY = Math.random()*canvas.height;
        }
    }
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "rgb(20,20,20,0.2)";
    ctx.stroke();
}

function calcDistance(element1,element2){
    let kathete1 = Math.abs(element1.getX() - element2.getX());
    let kathete2 = Math.abs(element1.getY() - element2.getY());
    let hypothenuse = Math.sqrt(kathete1*kathete1+kathete2*kathete2);
    return hypothenuse
}

function bindParticles(e,array){
    for(el of array){
        if(calcDistance(e,el) <= 150){
            drawLine(e.getX(),e.getY(),el.getX(),el.getY());
        }
    }
}

particleArray = [];

for(i=0;i!=64;i++){
    particleArray.push(new Particle())
}

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(e of particleArray){
        e.draw()
        e.update()
        bindParticles(e,particleArray)
    }
    requestAnimationFrame(render)
}

render()