
let questions = [
  {
  numb: 1,
  question: "A compiler is a",
  answer: "Machine-dependent and OS-dependent",
  options: [
    "Machine-independent and OS-independent",
    "Machine-dependent and OS-dependent",
    "Machine-dependent and OS-independent",
    "Machine-independent and OS-dependent"
  ]
},
{
  numb: 2,
  question: "The HTML tags are all?",
  answer: "Not case sensitive",
  options: [
    "In lower case",
    "In upper case",
    "Case sensitive",
    "Not case sensitive"
  ]
},
{
  numb: 3,
  question: "Which is correct CSS syntax?",
  answer: "body {color: black;}",
  options: [
    "{body;color:black;}",
    "{body:color=black;}",
    "body:color=black;",
    "body {color: black;}"
  ]
},
  {
  numb: 4,
  question: "JavaScript is an _ language?",
  answer: "Object-Oriented",
  options: [
    "Object-Oriented",
    "Object-Based",
    "Procedural",
    "None of the above"
  ]
},
  {
  numb: 5,
  question: " Identify the correct statement",
  answer: "All XML elements must be properly closed",
  options: [
    "All XML elements must be lower case",
    "All XML documents may not have a DTD",
    "All XML elements must be properly closed",
    "All the statements are true"
  ]
},
];

 
let startBtn = document.querySelector(".start-btn");
let infoBox = document.querySelector(".info_box");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".continue");
let quizBox = document.querySelector(".quiz_box");
let queText = document.querySelector('.que_text')
let nextBtn = document.querySelector('.next_btn')
let totalQueCount = document.querySelector('.total_que')
let optionList = document.querySelector('.option_list')
let timeCount = document.querySelector('.timer_sec')
let timeLine = document.querySelector('.time_line')
let resultBox = document.querySelector('.result_box')
let restartQuiz = document.querySelector('.restart')
let quitQuiz = document.querySelector('.exist')
let scoreText = document.querySelector('.score_text')
let timeText = document.querySelector('.time_text')




// if startQuiz button clicked
startBtn.onclick =function(){
  infoBox.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exitBtn.onclick = function (){
  infoBox.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continueBtn.onclick = function(){
  infoBox.classList.remove("activeInfo"); //hide info box
  quizBox.classList.add("activeQuiz"); //show quiz box
  displayQuiz(0)
  queCounter(1)
  startTimer(15)
  startTimerLine(0)
}


let que_count = 0
let que_numb = 1
let counter;
let counterLine;
let timeValue = 15
let widthValue = 0
let score = 0


// if Next button clicked
nextBtn.addEventListener('click', function(){
  if (que_count < questions.length - 1){
    que_count ++
    que_numb ++
    displayQuiz(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    clearInterval(counterLine)
    startTimerLine (widthValue)
    nextBtn.style.display = 'none'
    timeText.textContent = 'Time left: '
  }
  else{
    showResultBox()
  } 
})


// function to diplay questions
function displayQuiz (index){
 let que_tag =  `<span>${questions[index].numb}. ${questions[index].question}</span>`
 let option_tag =
  `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;
  queText.innerHTML = que_tag; 
  optionList.innerHTML = option_tag; 
 
  let option = document.querySelectorAll('.option')
  for (let i = 0; i < option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)')
  }
}


function optionSelected(answer){
  clearInterval(counter)
  clearInterval(counterLine)
  let userAns = answer.textContent
  let correctAns = questions[que_count].answer
  let allOptions = optionList.children.length
  
  if (userAns == correctAns){
    score ++
    console.log(score)
    answer.classList.add('correct')
    console.log('correct')
  }
  else {
    clearInterval(counter)
    clearInterval(counterLine)
    answer.classList.add('incorrect')
    console.log('wrong')
  }

  //once user select, disable all other options
  for (let i = 0; i < allOptions; i++){
    optionList.children[i].classList.add('disabled')
  }
  
  nextBtn.style.display = 'block'
}


function  showResultBox(){
  infoBox.classList.remove("activeInfo"); 
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add('activeResult')

 
  if (score == 5){
    let scoreTag =`<span>Congrats! You have got <p>${score}</p> out of <p>${questions.length} </p> </span>`
    scoreText.innerHTML = scoreTag
  }
  else if (score >= 3 && score <= 5){
    let scoreTag =`<span>Going Good! You have got <p>${score}</p> out of <p>${questions.length} </p> </span>`
    scoreText.innerHTML = scoreTag
  }
  else if (score < 3 && score > 2){
    let scoreTag = `<span>Nice Try! You have got <p>${score}</p> out of <p>${questions.length} </p> </span>`
    scoreText.innerHTML = scoreTag
  }
  else {
    let scoreTag = `<span>Try Again! You have got <p>${score}</p> out of <p>${questions.length} </p> </span>`
    scoreText.innerHTML = scoreTag
  }
}


function startTimer (time){
  counter = setInterval(timer, 1000)
  function timer(){
    timeCount.textContent = time
    time--
    if (time < 9){
      let addZero = timeCount.textContent
      timeCount.textContent = '0' + addZero
    }
    if (time < 0){
      clearInterval(counter)
      timeCount.textContent = '00'
      timeText.textContent = 'Time off: '

      const allOptions = optionList.children.length; //getting all option items
      let correctAns = questions[que_count].answer; //getting correct answer from array
      for(i=0; i < allOptions; i++){
          if(optionList.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
              optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
              console.log("Time Off: Auto selected correct answer.");
          }
      }
      for(i=0; i < allOptions; i++){
          optionList.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      nextBtn.style.display = 'block'
    }
  }
}


function startTimerLine (time){
  counterLine = setInterval(timer, 23)
  function timer(){
    time ++
    timeLine.style.width = time +'px'
  
    if (time > 700){
      clearInterval(counterLine)
      
    }
  }
}


function queCounter(index){
  let totalQueCountTag = `<span><p>${index}</p> / <p> ${questions.length}</p></span>`
  totalQueCount.innerHTML = totalQueCountTag
}