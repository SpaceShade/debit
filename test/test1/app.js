let value = document.getElementById('number');
let add = document.getElementById('increase');
let remove = document.getElementById('decrease');
let reset = document.getElementById('reset');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    value.innerHTML = integer;
})
remove.addEventListener('click',function(){
    integer -= 1;
    value.innerHTML = integer;
})
reset.addEventListener('click', function(){
    integer = 0;
    value.innerHTML = integer;
})
