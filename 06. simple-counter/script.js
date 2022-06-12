

let countEl = document.querySelector('.count-el')
let incrementBtn = document.querySelector('.increment')
let resetBtn = document.querySelector('.reset')
let decrementBtn = document.querySelector('.decrement')


// count ko initialize krna
let count = 0;

incrementBtn.addEventListener('click', function() {
    count++
    countEl.textContent = count
    console.log(count)
})

decrementBtn.addEventListener('click', function() {
    count--
    countEl.textContent = count
    console.log(count)
})

resetBtn.addEventListener('click', function() {
    count = 0
    countEl.textContent = count
    console.log(count)
})

//hogya