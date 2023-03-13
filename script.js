// create api with data variable

const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
          { answer: "swordfish", isCorrect: true },
          { answer: "jellyfish", isCorrect: false },
          { answer: "starfish", isCorrect: false },
          { answer: "crayfish", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
          { answer: "bees", isCorrect: false },
          { answer: "penguins", isCorrect: false },
          { answer: "butterflies", isCorrect: true },
          { answer: "camels", isCorrect: false },
        ],
      },
      {
        id: 1,
        question: "A group of which animals is referred to as a wake?",
        answers: [
          { answer: "bats", isCorrect: false },
          { answer: "vultures", isCorrect: true },
          { answer: "ants", isCorrect: false },
        ],
      },
];

//get html classname with help of dom 

const gameScreen  = document.querySelector(".game");
const resultScreen  = document.querySelector(".result");
const question  = document.querySelector(".question");
const answersContainer  = document.querySelector(".answers");
const submit  = document.querySelector(".submit ");
const play  = document.querySelector(".play ");


// create some variable which need front

let qIndex = 0;
let correctCount  = 0;
let wrongCount  = 0;
let total  = 0;
let selectedAnswer ;


// create playAgain  function

const playAgain  = () =>{
    qIndex =0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
showQuestion(qIndex);}

// add eventListener on play

play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

//create showResult  function for result showing

const showResult  =() =>{
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent=`Correct Answers : ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;

resultScreen.querySelector(".score").textContent = `Score : ${(correctCount - wrongCount) * 10}`;

};

// create showQuestion  function

const showQuestion = (qNumber)=>{
if(qIndex === data.length) return showResult ();
selectedAnswer = null;
question.textContent = data[qNumber].question;
answersContainer.innerHTML = data[qNumber].answers.map((item , index) => `
<div class="answer">
<input type = "radio" id=${index} name = "answer" value = ${item.isCorrect}/>
<label for = "1">${item.answer}</label>
</div>
`).join("")
selectAnswer();
}

// create selectAnswer  function

const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click" ,(e)=>{
            selectedAnswer = e.target.value;
        });
    });
};

// create submitAnswer  function 

const submitAnswer  = () => {
  submit.addEventListener("click",()=>{
    if(selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount ++;
    qIndex++;
    showQuestion(qIndex);
    }else alert("select an answer!")
  });
}

showQuestion(qIndex);
submitAnswer();