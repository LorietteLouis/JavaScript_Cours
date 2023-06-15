


const div1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')

for(let i = 0; i < btns1.length ; i++){
btns1[i].addEventListener('click', onBtnClick)
}
function onBtnClick(event){
    div1.style.backgroundColor = event.target.textContent
}

const input1 = document.querySelector('.input-3')
const text1 = document.querySelector('.text-to-display-3')

input1.addEventListener('input', submit)

function submit(){
    text1.textContent=input1.value
}

const text2 = document.querySelector('.text-to-display-2')
const form2 = document.querySelector('.form-2')
const input2 = document.querySelector('.input-2')

form2.addEventListener('click', onClick)

    function onClick(event){
        event.preventDefault()
    text2.textContent = input2.value;
    }

    const text3 = document.querySelector('.text-to-display-4')
    const input3 = document.querySelectorAll('.input-4')
    
    const difference = 0;
    
    input3[0].addEventListener('change', startDate)
    function startDate(){
        text3.textContent = `Trip last ${getDifferenceBetweenDates(input3[0].value, input3[1].value)} days`
    }
    
    input3[1].addEventListener('change', endDate)
    function endDate(){
        text3.textContent = `Trip last ${getDifferenceBetweenDates(input3[0].value, input3[1].value)} days`
    }
    
    function getDifferenceBetweenDates(d1, d2) {
        const date1 = new Date(d1);
        const date2 = new Date(d2);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (3600 * 1000 * 24));
        return diffDays;
    }

// for (let i = 0; i < input3.length; i++) {
//     input3[i].addEventListener('input',onInput3Change);
// }

// input3[1].addEventListener('input', onInput3Change)

// function onInput3Change(){
//     let result=getDaysBetweenDates(input3[1].value, input3[0])
// }



//     <!-- EVENT3 -->
//     <div class="event betweenTime">
//         <label for="timeOne">Start time:
//           <input class="timeOne" type="time" id="timeOne">
//         </label>
//         <label for="timeTwo">End time:
//           <input class="timeTwo" type="time" id="timeTwo">
//         </label>
//         Hang Time:
//         <span class="hangTime" id="hangTime"></span>
//       </div>

// // EVENT3
// const timeOne = document.querySelector('.timeOne');
// const timeTwo = document.querySelector('.timeTwo');
// const hangTime = document.querySelector('.hangTime');

// // Function to calculate the time difference in hours and minutes
// function timeDiff(timeOne, timeTwo) {
// const diff = (timeTwo - timeOne) / 1000; // Difference in seconds
// const hours = Math.floor(diff / 3600); // Calculate the whole number of hours
// const minutes = Math.floor((diff % 3600) / 60); // Calculate the remaining minutes
// return { hours, minutes };
// }

// // Event listener for timeOne input
// timeOne.addEventListener('change', () => {
// const { hours, minutes } = timeDiff(new Date(2000-01-01T${timeOne.value}), new Date(2000-01-01T${timeTwo.value}));
// hangTime.textContent = ${hours} hours ${minutes} minutes;
// });

// // Event listener for timeTwo input
// timeTwo.addEventListener('change', () => {
// const { hours, minutes } = timeDiff(new Date(2000-01-01T${timeOne.value}), new Date(2000-01-01T${timeTwo.value}));
// hangTime.textContent = ${hours} hours ${minutes} minutes;
// });

const text4 = document.querySelector('.text-to-display-5')
const input4 = document.querySelector('.input-5')

    input4.addEventListener('input' , cursor)
    function cursor(event){
        text4.textContent = event.target.value
    }

const text5 = document.querySelector('.text-to-display-6')
const select1 = document.querySelector('.select-6')

select1.addEventListener('change' , selector)
function selector(event){
    text5.textContent = event.target.value
}

const div2 = document.querySelector('.div-to-color-7')
const input5 = document.querySelector('.input-7')

input5.addEventListener('input', selectorColor)
function selectorColor(event){
    div2.style.backgroundColor = event.target.value
}

const div3 = document.querySelector('.div-to-color-8')
const btns2 = document.querySelectorAll('.btn-8')

for(let i = 0; i < btns1.length ; i++){
    btns2[i].addEventListener('click', helloClick)
    }
    function helloClick(event){
        div3.style.backgroundColor = event.target.getAttribute('data-color')
    }

const text6 = document.querySelector('.text-to-display-9')
const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0 ; i < checkbox.length ; i++){
    checkbox[i].addEventListener('change' , check)
    function check(){
    text6.textContent = `${checkbox[0].checked ? checkbox[0].value : ''}${checkbox[0].checked && checkbox[1].checked ? ' - ' : ''}${checkbox[1].checked ? checkbox[1].value : ''}`
    }
}