const ctx = document.getElementById('canvas').getContext('2d');


resize();

window.addEventListener("resize", resize);
let mousePos = {
    x: 0,
    y: 0
}

let color = '#fff';

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', mPos);
document.addEventListener('mouseenter', mPos);

document.addEventListener('touchmove', draw);
document.addEventListener('touchend', mPos);
document.addEventListener('touchstart', mPos);

function mPos(e) {

    if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
        var evt = (typeof e.originalEvent === 'undefined' ? e : e.originalEvent);
        var touch = evt.touches[0] || evt.changedTouches[0]
        mousePos.x = window.innerWidth ? touch.pageX - 5 : touch.pageX - 50;
        mousePos.y = window.innerHeight ? touch.pageY - 10 : touch.pageY - 50;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
        mousePos.x = window.innerWidth < 768 ? e.clientX - 5 : e.clientX - 50;
        mousePos.y = window.innerWidth < 768 ? e.clientY - 10 : e.clientY - 50;
    }
}


function resize() {
    ctx.canvas.width = window.innerWidth < 768 ? window.innerWidth - 10 : window.innerWidth - 100;
    ctx.canvas.height = window.innerWidth < 768 ? window.innerHeight - 20 : window.innerHeight - 100;
}

function draw(e) {
    if (e.type == 'mousemove' && e.buttons !== 1) {
        return;
    }

    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;


    ctx.moveTo(mousePos.x, mousePos.y);
    mPos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
}

function setColor(e) {
    color = e.dataset.color;
}

function erase() { resize(); }
