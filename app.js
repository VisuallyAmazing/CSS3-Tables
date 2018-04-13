// animated bounceInRight
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

first.addEventListener('click',addAnimation);

function removeAnimation(e){
    console.log(e);
}

function addAnimation(e){
    this.classList.add('animated','bounceInUp');
    setTimeout(removeAnimation,2000);
}