
function setRamdomPosition(div) {
    posx=Math.floor(Math.random()*(containerWidth-divWidth));
    posy=Math.floor(Math.random()*(containerHeight-divHeight));
    div.style.left = posx + 'px';
    div.style.top = posy + 'px';
    return {x:posx, y:posy};
}

function moveDiv(div, dx, dy) {
    container=div.parentElement;
    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;
    divWidth = div.clientWidth;
    divHeight = div.clientHeight;
    setRamdomPosition(div);

    let {x,y} = setRamdomPosition(div);
    let isAnimating=true;
    function animate() {
        if(!isAnimating) return;
        x += dx;
        y += dy;

        if (x + divWidth > containerWidth || x < 0) {
            dx = -dx;
        }
        if (y + divHeight > containerHeight || y < 0) {
            dy = -dy;
        }        
        div.style.left = x + 'px';
        div.style.top = y + 'px';

        requestAnimationFrame(animate);
    }
    
    div.addEventListener('click', () => {
        if(div.id === 'div1') window.open('https://www.instagram.com/mr._.sreenu/', '_blank');
        if(div.id === 'div2') window.open('https://www.linkedin.com/in/sreenivasuluummadi/', '_blank');
        if(div.id === 'div3') window.open('https://www.w3schools.com', '_blank');
    })

    div.addEventListener('mouseenter', () => {
        isAnimating = false;
    });
    div.addEventListener('mouseleave', () => {
        isAnimating = true;
        animate();
    });
    div.addEventListener('dblclick', () => {
        isAnimating = true;
        animate();
    });

    animate();
}

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
let container = div1.parentElement;
let containerHeight = container.clientHeight;
let containerWidth = container.clientWidth;
let divWidth = div1.clientWidth;
let divHeight = div1.clientHeight;

moveDiv(div1, -1, 1);
moveDiv(div2, -1, -1);
moveDiv(div3, 1, -1)

function downloadResume(){
    window.open('https://drive.google.com/file/d/13fUBXVFgmMXzXRQrqJj8vIiX3iBJa8Bz/view?usp=sharing', '_blank');
}