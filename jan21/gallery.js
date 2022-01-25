var reddy=document.getElementById("fullImgBox");
var somu=document.getElementById("fullImg");

function openFullImg(pic){
    reddy.style.display="flex";
    somu.src=pic;
}
function closeFullImg(){
  reddy.style.display="none";  
}
