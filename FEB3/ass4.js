var count = document.getElementById('count');
var dec = document.getElementById('dec');
var inc = document.getElementById('inc');

let n = 0;
let increase;
let decrease;

inc.addEventListener('click', function(){
    clearInterval(decrease);
    inc.disabled = true;
    dec.disabled = false;
    increase = setInterval(() => {
        n++;
        count.innerText = n;
    }, 1000);
})

dec.addEventListener('click', function(){
    clearInterval(increase);
    inc.disabled = false;
    dec.disabled = true;
    decrease = setInterval(() => {
        n--;
        count.innerText = n;
    }, 1000);
})
