let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let message = document.getElementById("message");
let countCorrect = 7;
let countWrong = 5;
let countpercCorrect = (countCorrect / 12) * 100;
countpercCorrect = countpercCorrect.toFixed(2);
console.log(countpercCorrect);
//let countpercCorrect = ((countCorrect/questions.length)*100)
//let countperWrong = ((countWrong/questions.length)*100)
let countperWrong = (countWrong / 12) * 100;
countperWrong = countperWrong.toFixed(2);
console.log(countperWrong);

//let countdiffCorrect = (questions.length-countCorrect);
//let countdiffWrong = (questions.length-countWrong);

stamp();
messsagePrint();
function stamp() {
  correct.innerHTML = `<h2>Correct</h2>

                        <h3>${countpercCorrect}%</h3>

                        <p>${countCorrect}/10 question</p>`;
  wrong.innerHTML = ` <h2>Wrong</h2>

                        <h3>${countperWrong}%</h3>

                        <p>${countWrong}/10 question</p>`;
}

function messsagePrint() {
  if (countpercCorrect <= 60) {
    message.innerHTML = `<h4>Oh no!<br>
        <span>You not passed the exam.</span></h4>`;
  } else {
    message.innerHTML = `<h4>Congratulation!<br>
        <span class="pass">You passed the exam.</span></h4>
<p>
we'll send you the certificate in few minutes.Check your
email(including promotion / spam folder)
</p>`;
  }
}
