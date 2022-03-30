
var board = document.querySelector("#board");
let score = 0;
let cnt=0;
let start = false;
let randomarray = ["2s","4s","5s","8s","10s"]
let randomsize = [["312px","200px","9"],["351px","225px","8"],["401.14px","7"],["280.8px","180px","10"],["255.27px","163.64px","11"]]

function createZombie(){
    var zombie = document.createElement('div');
    var speed = randomarray[Math.floor(Math.random()*5)]
    var size = Math.floor(Math.random()*5);
    zombie.classList.add("zombie");
    zombie.style.position="absolute";
    zombie.style.zIndex="2";
    zombie.style.right="-200px";
    zombie.style.width=randomsize[size][1];
    zombie.style.height=randomsize[size][0];
    zombie.style.transform="scale(0.7)";
    zombie.style.animation="walk 1s 0s infinite steps(" + randomsize[size][2] + "), walkFrom 14s 0s 1 linear";
    zombie.style.backgroundImage=("url('walkingdead.png')");
    zombie.style.backgroundSize="cover";
    zombie.style.animationDuration = "0.7s, " + speed;
    zombie.classList.add("animationDuration");
    var bottom = Math.floor((Math.random() * 80) + -50);
    zombie.style.bottom = bottom + "px";
    zombie.style.zIndex = 60 - bottom;
    board.appendChild(zombie);
    zombieKilled(zombie);
    lost(zombie);
}

var array=["0000","000","00","0",""];

function zombieKilled(a) {
    a.addEventListener("click", function () {
        this.parentElement.removeChild(this);
        score+=18;
    });
}

board.addEventListener("click",function(){
    if(!start){
        document.getElementById("text").style.opacity="0";
        start = true;
        time = setInterval(createZombie, 1000);
    }
    else{
        score-=6;
        let c=1;
        if(score<0){c=2;}
        document.getElementById("score").innerText = array[score.toString().length-c] + score;
    }
})

function lost(a){
a.addEventListener("animationend",function(){
cnt++;
if(cnt==3){
document.getElementById("text").style.opacity="1";
board.querySelectorAll(".zombie").forEach(function(x){
    x.remove();
});
cnt=0;
score=0;
clearInterval(time);
start=false;
document.getElementById("score").innerHTML="00000";
}
})
}
