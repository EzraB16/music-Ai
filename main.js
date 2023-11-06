song1="";
song2="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music.mp3");
}

function song(){
    song.play();
}

function draw(){
    image(video,0,0,600,900);
    
}