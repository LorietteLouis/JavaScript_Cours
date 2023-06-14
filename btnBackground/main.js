
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

const colors = ['#ff0000','#ff2000','#ff4000','#ff8000','#ffa000','#fff000','#fff200','#fff400','#fff800','#fffa00']

btn.addEventListener('click',onBtnClick)

let nbClick = 0




function onBtnClick(){
    for(let i = 0; i < 10 ; i++){
        for (let j = 0; j < 10 ; j++){
        const newDiv = document.createElement("div")
        newDiv.classList.add('new-div')
        mainContainer.appendChild(newDiv)
        newDiv.style.left = `${j}0vw`
        newDiv.style.top = `${i}0vh`
        newDiv.style.backgroundColor = colors
        }
    } 
    function colors(){
        (Math.random()*10).toFixed(0)
    }

}

