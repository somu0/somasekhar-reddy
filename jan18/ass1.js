var a=document.getElementById("like");
function Glike1(){
    if(a.style.color=="black"){
        a.style.color="#ff0000";
    }else{
        a.style.color="black";
    }
}
a.addEventListener('click', Glike1);
