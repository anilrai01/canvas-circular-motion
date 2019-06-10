var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var ctx = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined,
}

var colorArray = [
    '#0C39A0',
    '#FF2828',
    '#CF398E',
    '#FF7E14',
    '#FFEB14',
    '#58E912',
]

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // init();
});

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

function Object(x,y,dx,dy,rad){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = Math.floor(Math.random() * colorArray.length);

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.rad, 0,Math.PI * 2, false);
        ctx.fillStyle = colorArray[this.color];
        ctx.fill();
        // Update the Movement
        this.update();
    }

    this.update = function(){
        if(this.x + this.rad > innerWidth || this.x - this.rad < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.rad > innerHeight || this.y - this.rad < 0){
            this.dy = -this.dy;
        }

        this.x+=this.dx;
        this.y+=this.dy;
    }
}

// console.log('Draw');


// var ObjectArray = [];

// function init(){
//Creating numbers of Objects
// for(var i = 0; i < 100 ; i++){
//     var x = 100;
//     var y = 100;
//     var  dx = 5;
//     var dy = 5;
//     var rad = 50;

//     ObjectArray.push(new Object(x,y,dx,dy,rad));
// }
// }

// init();

var obj1 = new Object(100,100,5,5,30);



function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    obj1.draw();

    // for(var i = 0; i<ObjectArray.length; i++){
    //     ObjectArray[i].draw();
    // }

}

animate();