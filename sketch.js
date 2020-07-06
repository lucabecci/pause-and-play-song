let song;
let button;
let buttonStop;

function setup() {
  createCanvas(400, 400);
  song = loadSound("./sounds/song2.mp3", loaded);
  button = createButton('play');
  button.mousePressed( () => {
    if(!song.isPlaying()){
      song.play()
      song.setVolume(0.3)
      button.html('pause')
    }else{
      song.pause();
      button.html('play')
    }})
  buttonStop = createButton('stop');
  buttonStop.mousePressed( () =>{
    song.stop();
    button.html('play')
  })  
}
loaded = () => console.log('load');

function draw() {
  background(0);
  textSize(32);
  text('Listen to the song', height/2 -150, width/2);
  fill(255);
}


