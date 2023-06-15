
// const container = document.querySelector('.container')
// const mainContainer = document.querySelector('.main-container')
// const btn = document.querySelector('.main-btn')

// const newDiv = document.createElement("div");
// newDiv.classList.add('new-div');
// mainContainer.appendChild(newDiv);

// const newDiv2 = document.createElement("div")
// newDiv2.classList.add('new-div')
// mainContainer.appendChild(newDiv2)
// newDiv2.style.left = "10vw"
// newDiv2.style.backgroundColor = "Color"


// btn.addEventListener('mouseenter', onBtnClick)
// btn.addEventListener('mouseleave', onBtnClick)

// let changeColorToBlack = true;
// let originColor = container.style.backgroundColor;

// function onBtnClick(){
//     if (changeColorToBlack){
//         container.style.backgroundColor = 'white'
//     } else {
//         container.style.backgroundColor = originColor
//     }
//     changeColorToBlack = !changeColorToBlack
// }

const container = document.querySelector('.container')
const mainContainer = document.querySelector('.main-container')
const btn = document.querySelector('.main-btn')


btn.addEventListener('click', onBtnClick)

function onBtnClick() {
    mainContainer.textContent = ''
    let nbBlock = 0;
    for (let line = 0; line < 10; line++) {
        for (let col = 0; col < 10; col++) {
            (function (c, l) {
                setTimeout(function () {
                    const newDiv = document.createElement("div");
                    mainContainer.appendChild(newDiv)
                    newDiv.classList.add('new-div')
                    newDiv.style.left =Math.floor((Math.random()*10))*10 + `vw`
                    newDiv.style.top =Math.floor((Math.random()*10))*10 + `vh`
                    newDiv.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
                }, 50 * nbBlock)
            })(col,line)
            nbBlock++  
        }
    }
}

