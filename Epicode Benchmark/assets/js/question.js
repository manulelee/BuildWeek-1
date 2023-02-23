const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

var randomNums = [];
var procedi = document.getElementById("pulsanti");
let i = 0;
var scelta;
var selezionato = false; // SEMAFORO - verifica che almeno un campo e` selezionato
var score = 0;
var totale = 0;

// 1) generazione numero casuale ok
const nq = function () {
  while (randomNums.length < questions.length) {
    let randomN = Math.floor(Math.random() * questions.length);
    if (randomNums.includes(randomN)) {
      nq();
    } else {
      randomNums.push(randomN);
    }
  }
  return randomNums;
};

//2) creazione domanda ok
const creazioneDomanda = function () {
  document.getElementById("exam").innerHTML = questions[randomNums[i]].question;
};

//3) creazione opzioni opzioni risposte ok
function creazioneRisposte() {
  let option = document.getElementById("option");
  let answers = [];
  option.innerHTML = "";
  answers = questions[randomNums[i]].incorrect_answers;
  answers.unshift(questions[randomNums[i]].correct_answer);
  // da creare random numeri per mischiare le risposte
  let k = 0;
  procedi.removeAttribute("hidden");
  procedi.setAttribute("disabled", "disabled");
  answers.forEach((element) => {
    option.innerHTML += `<span class="mySpan"><input onclick="check()"  type="radio" name="risposta" id="${k}" 
        value="${element}"><label for="${k}" class="pulsanteQuiz"> ${element}</label></span>`;
    k++;
  });
  return answers;
}

// controllo radio e punteggio domanda ok
function check() {
  let risposte = document.querySelectorAll("input");
  risposte.forEach((element) => {
    if (element.checked == true) {
      selezionato = true;
      procedi.removeAttribute("disabled");
      scelta = document.querySelector("input:checked").value;
      console.log(scelta);
      if (scelta == questions[randomNums[i]].correct_answer) {
        score = 1;
      } else {
        score = 0;
      }
      console.log(`Punteggio della domanda ${i + 1}: ${score}`);
    }
  });
}

// calcolo del punteggio totale ok
function valutazione() {
  totale += score;
  console.log("totale " + totale);
  i++;
}

// rimozione di tutti i campi
function clear() {
  document.getElementById("option").innerHTML = "";
  document.getElementById("exam").innerHTML = " ";
  procedi.setAttribute("visibility", "hidden");
  answers = [];
  selezionato = false;
}

// timer iniziato ma da modificare
function timer() {
  let time = 30;
  setInterval(console.log(time--), 1000);

  console.log(time);
}
nq();

// esecuzione del codice ok

function test() {
  nq();
  if (i < questions.length) {
    clear();
    creazioneDomanda();
    creazioneRisposte();
    check();
    //CREARE IL TIMER
  } else {
    clear();

    //prendere il bottone e creare il link per la pagina 3 (CON URL SEARCH PARAMS)
    setTimeout(alert("hai finito"), 10000);
  }
}

test();
