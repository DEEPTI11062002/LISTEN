console.log("Welcome to Listen")
//intialise the variables
let songIndex = 0;
let audioElement = new Audio('3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
//let songItems = Array. from(document.getElementById('songItem'));
let songs = [
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Khuda", filePath: "C:\Users\deept\OneDrive\Desktop\music\8.mp3", coverPath: "covers/8.jpg"}
    
]
/*songItems.forEach((element,i)=>{
    console.log(element,i); 
element.getElementsByTagname('img')[0].src=music[i].coverPath;
})*/
//audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate')
  //update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 // console.log(progress);
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100 ;
})
/*const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItem Play')).forEach(element)=>{
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
     })
}
Array.from(document.getElementsByClassName('songItem Play')).forEach(element)=>{
    Element.addEventListener('click', (e)=>{
        makeAllPlays();
       e.target.classList.remove('fa-play-circle')
       e.target.classList.remove('fa-play-circle')
        })*/