
let audioElement =new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songIndex =0;

// let all song details
let songs =[
    {SongName: "Dakko Dakko", filePath:"songs/1.mp3", coverPath: "covers/pushpa.jpg"},
    {SongName: "Srivalli", filePath:"songs/2.mp3", coverPath: "covers/pushpa.jpg"},
    {SongName: "Saami saami", filePath:"songs/3.mp3", coverPath: "covers/pushpa.jpg"},
    {SongName: "Eyy Bidda ", filePath:"songs/4.mp3", coverPath: "covers/pushpa.jpg"},
    {SongName: "Oo Antava", filePath:"songs/5.mp3", coverPath: "covers/pushpa.jpg"},
    {SongName: "Halamithi", filePath:"songs/6.mp3", coverPath: "covers/halamithi.jpg"}  
]
// main play Button onClick
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime ==0){
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
    }
})

// Progress bar and current duration of Song element
audioElement.addEventListener('timeupdate', ()=>{
    progressBar.value= parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById('currentDuration').innerText = Math.round(audioElement.currentTime/60)+':'+Math.round(audioElement.currentTime%60);
    // document.getElementById(songIndex).innerHTML = Math.round(audioElement.currentTime);

})
// Our input on ProgressBar to change duration of song
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

// assigning song name in Html elements
songItem.forEach((element,i) => {
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].SongName;
//     var audio = new Audio(songs[i].filePath).duration
//     element.getElementsByClassName('songItem').innerText = audio  
});

// Function to change pause button to play
const changeRemaining = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.replace('fa-pause-circle','fa-play-circle' );
    })
}

// play button function at each element in list 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        songIndex = parseInt(e.target.id);
        if (e.target.classList[3] == 'fa-play-circle'){
            changeRemaining()
            e.target.classList.replace('fa-play-circle', 'fa-pause-circle');
            let x = songIndex;
            y = 'songs/'+(x)+'.mp3';
            audioElement.src = y;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle')
        }
        else
        {
            changeRemaining()
            e.target.classList.replace('fa-pause-circle', 'fa-play-circle');
            audioElement.pause();
        }
            
        


    })
})

// Next button 
document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >5){
        songIndex = 1;
    }
    else{
        songIndex +=1
    }
    let x = songIndex;
    y = 'songs/'+(x)+'.mp3';
    audioElement.src = y;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    changeRemaining();
    // id = songIndex.toString
    // document.getElementById(id).classList.remove('fa-paly-circle');
    // document.getElementById(id).classList.add('fa-pause-circle');

})

// previous button 
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=1){
        songIndex = 1;
    }
    else{
        songIndex -=1;
    }

    let x = songIndex;
    y = 'songs/'+(x)+'.mp3';
    audioElement.src = y;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songIndex = songIndex.toString()
    changeRemaining();
    document.getElementById(songIndex).classList.remove('fa-paly-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
})


