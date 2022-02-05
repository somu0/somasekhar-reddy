var seconds=00;
var tens=00;
var outputseconds=document.getElementById('second');
var outputtens=document.getElementById('tens');
var buttonstart=document.getElementById('start');
var buttonstop=document.getElementById('stop');
var buttonreset=document.getElementById('reset');
var Interval;
buttonstart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval=setInterval(starttime,10);
});
buttonstop.addEventListener('click',()=>{
    clearInterval(Interval);
});
buttonreset.addEventListener('click',()=>{
    clearInterval(Interval);
    tens="00";
    seconds="00";
    outputseconds.innerHTML=seconds;
    outputtens.innerHTML=tens;
});    
function starttime(){
    tens++;
    if(tens<=9){
        outputtens.innerHTML="0"+tens;
    }
    if(tens>9){
        outputtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        outputseconds.innerHTML="0"+seconds;
        tens=0;
        outputtens.innerHTML="0"+tens;
    }
    if(seconds>9){
        outputseconds.innerHTML=seconds;
    }
}
