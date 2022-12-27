console.log("Welcome to Spotify")
//Random comment

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio("1.mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('masterPlay');
let gif=document.getElementById('gif');





let songs=[
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.png"},
    {songName:"Tumse mil ke dilka", filepath:"song/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Tumse mil ke dilka", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},

] 

// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play-circle');
        masterPlay.classList.add('fa-solid fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause-circle');
        masterPlay.classList.add('fa-solid fa-play');
        gif.style.opacity=0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


