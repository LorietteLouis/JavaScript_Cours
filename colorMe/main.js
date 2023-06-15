// for (let i = 0; i<=100; i++) {
//   const box = document.createElement('div');
//   box.classList.add('box');
//   document.querySelector('.container').appendChild(box);
// }


const randomBlock = document.querySelectorAll('.box')
const btn = document.querySelector('.main-btn')

let running = false

function addColor(){
    if(running){
    randomBlock.forEach(e =>{
        let newColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            e.style.background = newColor
        })
        setTimeout(star,500)
    }
}

btn.addEventListener('click', function(){
    btn.innerText = 'STOP IT'
    if(running){
        running = false
        btn.innerText = 'DO IT'
    } else {
        running = true
        addColor()
    }
})
