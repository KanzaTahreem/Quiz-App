
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
}
