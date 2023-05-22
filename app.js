const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



function changeBg(){
    const images = [
        'url("images/slider/1.jpg")',
        'url("images/slider/2.jpg")',
        'url("images/slider/3.jpg")',
        'url("images/slider/4.jpg")',
        'url("images/slider/5.jpg")',
        'url("images/slider/6.jpg")',
        'url("images/slider/7.jpg")',
        'url("images/slider/8.jpg")',
    ]

    const section = document.querySelector('#slider');

    const bg = images[Math.floor(Math.random() * images.length)];

    section.style.backgroundImage = bg;
}
setInterval(changeBg, 3000)