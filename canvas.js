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
];

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // init();
});

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

function randomColor(color){
    return color[Math.floor(Math.random() * color.length )];
}

function randomIntFromRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function Object(x,y,rad,color){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(70, 150)

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.rad, 0,Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();

    }

    this.update = function(){
        //Draw the object

        this.draw();
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;

    }
}

// console.log('Draw');


var ObjectArray = [];

function init(){
// Creating numbers of Objects
for(var i = 0; i < 100 ; i++){
    var x = 100;
    var y = 100;
    var rad = 5;
    var color = randomColor(colorArray);

    ObjectArray.push(new Object(canvas.width / 2, canvas.height / 2,rad,color));
}
}

init();

// var obj1 = new Object(100,100,5,5,30);



function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    // obj1.draw();

    ObjectArray.forEach(object => {
        object.update();
    });

}

animate();