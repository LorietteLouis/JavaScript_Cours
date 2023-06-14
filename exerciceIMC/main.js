

// const colors = ['#ff0000','#ff2000','#ff4000','#ff8000','#ffa000','#fff000','#fff100']

// mainBtn.addEventListener("click", onClick)

// let nbClick = 0

// function onClick(event){
//     if (nbClick > colors.lenght) nbClick = 0
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++
// }
// const mainBtns = document.querySelectorAll(".main-button")
// const mainContainer = document.querySelector('.main-container')

// for (let i = 0; i < mainBtns.length; i++){
//     mainBtns[i].addEventListener("click", onClick)
// }

// function onClick(event){
//     let color = event.target.getAttribute("data-color")
//     mainContainer.style.backgroundColor = color
// }

// const mainBtn = document.querySelector(".main-button")
// const input = document.querySelector("input")
// const mainContainer = document.querySelector(".main-container")

// mainBtn.addEventListener("click",onClick)

// function onClick() {
//     mainContainer.style.backgroundColor = input.value
// }
const bmiData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];

  const formBtn = document.querySelector('.form-btn')
  const displayBMI = document.querySelector('.bmi-value')
  const description = document.querySelector('.description')
  const inputs = document.querySelectorAll('input');
  
  formBtn.addEventListener('click', action)
  
  function action(differentInput) {
    differentInput.preventDefault();
    const height = inputs[0]
    const weight = inputs[1]

    if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
        handleError()
        return
      }

      const bmi = (weight.value / (height.value / 100)**2).toFixed(1)
      // const bmi = (weight.value / Math.pow((height.value / 100),2)).toFixed(1)
  showResult(bmi)
}

function showResult(bmi) {
    let rank;
    for (let i = 0; i < bmiData.length; i++) {
      const data = bmiData[i];
      if (bmi > data.range[0] && bmi <= data.range[1]) {
        rank = data
        break
      } else if (typeof data.range === 'number' && bmi >= data.range) {
        rank = data;
      }
    }

    displayBMI.textContent = bmi;
    displayBMI.style.color = rank.color;
    description.textContent = rank.name;
  }

  function handleError() {
    displayBMI.textContent = "Echec"
    description.textContent = "Remplissez correctement le formulaire"
  }
