const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does <b>CPU</b> stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language <b>Java</b>, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for <b>Snapchat</b> is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the <b>original C programming language</b>; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred <b>image format</b> used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does <b>CSS</b> stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system <b>Android 7.0</b>?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character <b>limit for a Tweet?</b>",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "<b>Linux</b> was first created as an alternative to <b>Windows XP</b>.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which <b>programming language</b> shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

var randomNums = [];
var procedi = document.getElementById("pulsanti");
let i = 0;
var incorrect = 0;
var scelta;
var selezionato = false; // SEMAFORO - verifica che almeno un campo e` selezionato
var score = 0;
var incorrect = 0;
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
  document.getElementById("contatoreDomanda").innerHTML = `QUESTION ${i + 1}<span> / 10</span>`;
};

//3) creazione opzioni opzioni risposte ok
function creazioneRisposte() {
  let option = document.getElementById("option");
  let answers = [];
  option.innerHTML = "";
  answers = questions[randomNums[i]].incorrect_answers;
  answers.unshift(questions[randomNums[i]].correct_answer);
  answers.sort();
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
  score = 0;
  let risposte = document.querySelectorAll("input");
  risposte.forEach((element) => {
    if (element.checked == true) {
      selezionato = true;
      procedi.removeAttribute("disabled");
      scelta = document.querySelector("input:checked").value;
      //console.log(scelta);
      if (scelta == questions[randomNums[i]].correct_answer) {
        score = 1;
      } else {
        score = 0;
      }
      //console.log(`Punteggio della domanda ${i + 1}: ${score}`);
    }
  });
}

// calcolo del punteggio totale ok
function valutazione() {
  totale += score;
  //console.log("totale corrette" + totale);
  i++;
}

// rimozione di tutti i campi
function clear() {
  document.getElementById("option").innerHTML = "";
  document.getElementById("timer").innerHTML = "";
  document.getElementById("exam").innerHTML = " ";
  procedi.setAttribute("visibility", "hidden");

  answers = [];
  selezionato = false;
}

nq();

// esecuzione del codice ok

function timer() {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  const TIME_LIMIT = 30;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
  </div>
  `;
  startTimer();

  procedi.addEventListener("click", function () {
    clearInterval(timerInterval);
  });

  function onTimesUp() {
    clearInterval(timerInterval);
    clear();
    valutazione();
    test();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `<div class="piccolo">SECONDS</div><span id="seconds">${seconds}</span><div class="piccolo">REMANING</div>`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
      document.getElementById("base-timer-path-remaining").classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document.getElementById("base-timer-path-remaining").classList.remove(info.color);
      document.getElementById("base-timer-path-remaining").classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
  }
}

function test() {
  nq();
  if (i < questions.length) {
    clear();
    creazioneDomanda();
    timer();
    creazioneRisposte();
    check();
    //CREARE IL TIMER
  } else {
    //console.log(`Totale risposte corrette: ${totale}`);
    clear();
    incorrect = questions.length - totale;
    //alert("Quiz terminato");
    window.location = `result.html?correct=${totale}&incorrect=${incorrect}`;
  }
  // clearInterval(timerInterval);
}

test();
