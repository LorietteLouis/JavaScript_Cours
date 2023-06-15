const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]
const frame = document.querySelector('.slide-frame')
const title = document.querySelector('.slider-title')
const legend = document.querySelector('.slider-legend')
const btns = document.querySelectorAll('.slider-btn')
const slide = document.querySelectorAll('.slider-img')


let slideIndex = 0;
let imgWidth = 80;


resetSlider();
setListeners();

function resetSlider(){
    for (let i = 0; i <= slide.length ; i++){
        const slide = slide[i]
        slide.style.left = imgWidth * i + 'vw';
       }
       btns[0].style.opacity = '0.4'
}

function setListeners() {
    for (let i = 0; i <= btns.length; i++) {
        const btns = btns[i];

        btns.addEventListener('click', onBtnClick)
        function onBtnClick(event){
            let step = event.currentTarget.classList.contains('slider-btn-right') ? 1 : -1
            slideIndex += step;
            
        }

    }
}
