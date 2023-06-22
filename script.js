console.log("Welcome to Spotify");
let songindex=0;
let audioelement=new Audio('Do you Know.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let mastersong=document.getElementById('mastersongname');
let songs=[
{songName:"Do You KnowSong by Diljit Dosanjh",filePath:"1.mp3",coverPath:"doyouknow.jpg"},
{songName:" Pindan De Jaye by Sajjan",filePath:"pind.mp3",coverPath:"pind.jpg"},    
{songName:"Mitran Da Junction by Diljit",filePath:"mitra.mp3",coverPath:"mitra.jpg"},  
{songName:"Champagne by Diljit",filePath:"cham.mp3",coverPath:"cham.jpg"}, 
{songName:"Navi yaari by Diljit",filePath:"Naviyari.mp3",coverPath:"navi.jpg"}, 
]



songitem.forEach((element,i) => {
    console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;
});
//handel play pause
masterplay.addEventListener('click',()=>{

    if(audioelement.paused||audioelement.currentTime<=0){
        
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{

        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//pdate seekbar
//listen evenntss
audioelement.addEventListener('timeupdate',()=>{
    console.log('time update');
   let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{

    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})


const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


let c=Array.from(document.getElementsByClassName("songplay"));

c.forEach((element)=>{
element.addEventListener('click',(e)=>{
makeallplay();
songindex=parseInt(e.target.id);
mastersong.innerHTML=songs[songindex-1].songName;
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioelement.src=`${songindex}.mp3`;
audioelement.currentTime=0;
audioelement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');


})

})


document.getElementById("next").addEventListener('click',()=>{
if(songindex>5){

    songindex=1;
    mastersong.innerHTML=songs[songindex-1].songName;
    audioelement.src=`${songindex}.mp3`;
audioelement.currentTime=0;
audioelement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');

}else{


    songindex+=1;


    mastersong.innerHTML=songs[songindex-1].songName;
    audioelement.src=`${songindex}.mp3`;
audioelement.currentTime=0;
audioelement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');

}
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<=1){
    
        songindex=1;
        mastersong.innerHTML=songs[songindex-1].songName;
        audioelement.src=`${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
    }else{
    
    
        songindex-=1;
    
    
        mastersong.innerHTML=songs[songindex-1].songName;
        audioelement.src=`${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
    }
    })