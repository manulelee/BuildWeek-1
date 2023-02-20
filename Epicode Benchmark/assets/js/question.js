const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
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
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
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
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

const opContainer = document.getElementById("option");
let answers = [];
let dioPorco = [];
var infoQ;
//
 //seleziona tutti i campi di imput
var selezionato=false;                           //verifica che almeno un campo e` selezionato
var contatore=0;

const nq = function () {
    let nq = Math.floor(Math.random() * (questions.length) + 1)
    return nq;
}


const ciclatore = function () {
    let indice = [0];

    for (let i = 0; i < 1; i++) {
        let n = nq();
        console.log(n)

        if (indice.includes(n) == false) {
            infoQ = questions.pop(n);
            newQuestion(infoQ);
            stampa(infoQ);
            check();
            
        }else{indice.push(n)};
        


        //clear();
    }
}


//la risposta corretta e` la [0]
function newQuestion(x) {
    answers = x.incorrect_answers;
    answers.unshift(x.correct_answer);
    return answers;
    
}
//stampa domanda e risposte
function stampa(x) {
    let option = document.getElementById("option");
    let k=0;
    document.getElementById("question").innerHTML = x.question; //domanda
    document.getElementById("procedi").innerHTML=`<button disabled="true" type="button"  id="succ">procedi</button>`
    answers.forEach(element => {
        
        option.innerHTML += ` <input onclick="check()" type="radio" name="risposta" id="${k}" 
        value="${element}"> <label for="${k}">${element}</label>` //opzioni

        document.getElementById("question_box").appendChild(option); //stampa
        k++; //incremento indice
    });   
}

//check risposte

const btnProcedi=document.getElementById("succ");
function check(){
    let risposte=document.querySelectorAll("input");
    risposte.forEach(element => {
        if (element.checked==true){
            selezionato=true;
            btnProcedi.setAttribute("disabled","false")

        }
    });
    

}



//pulisce il campo
function clear(){
    document.getElementById("procedi").innerHTML=" "
    document.getElementById("option").innerHTML=" ";
    answers=[];
    selezionato=false;
}
ciclatore();
