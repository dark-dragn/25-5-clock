let startStop=document.getElementById("start_stop");
let playPause=false;
let timerLabel=document.getElementById("timer-label");
let reset=document.getElementById("reset");
let breakIncrement=document.getElementById("break-increment");
let breakDecrement=document.getElementById("break-decrement"); 
let sessionIncrement=document.getElementById("session-increment");
let sessionDecrement=document.getElementById("session-decrement");
let breakLength=document.getElementById("break-length");
let sessionLength=document.getElementById("session-length");
let timeLeft=document.getElementById("time-left");
let audio=document.getElementById("beep");
let process=breakLength;
let checkformat=(minute,seconds)=>{
    if(minute<10){
        minute='0'+ minute
        if(seconds<10){
            seconds='0' + seconds
        }
    }
    else if(seconds<10){
        seconds='0' + seconds
    }
    return minute+":"+seconds;
}
let intervalfunction=()=>{
    let minute=parseInt(timeLeft.innerText.split(":")[0]);
    let seconds=parseInt(timeLeft.innerText.split(":")[1]);
    if(seconds + minute==0){
        console.log(minute+seconds);
        clearInterval(timer);
        console.log(process.innerText)
        timeLeft.innerText=checkformat(process.innerText,00);
        minute=parseInt(timeLeft.innerText.split(":")[0]);
        seconds=parseInt(timeLeft.innerText.split(":")[1]);
        if(process==breakLength){
            audio.play();
            timerLabel.innerText="Break"
             process=sessionLength;
             timer= setInterval(intervalfunction,1000)
        }
        else{
            timerLabel.innerText="Session"
            process=breakLength;
            timer= setInterval(intervalfunction,1000)
        }
    }
    else if(seconds){
        seconds=seconds-1;
    }
    else if(minute){
        seconds=59;
        minute=minute-1;
    }
        
        timeLeft.innerText=checkformat(minute,seconds);
        
}
let timer;
reset.addEventListener('click',()=>{
    clearInterval(timer);
    audio.pause();
    audio.currentTime = 0;
    playPause=false;
    timerLabel.innerText="Session"
    process=breakLength;
    timeLeft.innerText='25:00';
    breakLength.innerText=5;
    sessionLength.innerText=25;
})
startStop.addEventListener('click',()=>{
    if(playPause==false){
        
       timer= setInterval(intervalfunction,1000)
       playPause=true;
    }
    else{
        clearInterval(timer);
        playPause=false;
    }
})