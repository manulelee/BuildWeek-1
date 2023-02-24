let params = new URLSearchParams(location.search);
let correctAnswers = params.get("correct");
let incorrectAnswers = params.get("incorrect");

//console.log(correctAnswers);
//console.log(incorrectAnswers);

let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let message = document.getElementById("msg-content");
let countCorrect = correctAnswers;
let countWrong = incorrectAnswers;
let countpercCorrect = (countCorrect / 10) * 100;
countpercCorrect = countpercCorrect.toFixed(2);
console.log(countpercCorrect);
//let countpercCorrect = ((countCorrect/questions.length)*100)
//let countperWrong = ((countWrong/questions.length)*100)
let countperWrong = (countWrong / 10) * 100;
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
    message.innerHTML = `<h4 id="RSfailed">Oh no!<br>
        <span class="wrong">You not passed the exam.</span></h4>`;
  } else {
    message.innerHTML = `<h4 id="RSh4"><span id="congrats">Congratulations!</span><br>
        <span class="pass">You passed the exam.</span></h4>
<p>
we'll send you the certificate in few minutes.Check your
email (including promotion / spam folder)
</p>`;
  }
}



var bar = new ProgressBar.Circle(torta, {
  strokeWidth: 13,
  easing: 'easeInOut',
  duration: 1500,
  color: '#d20094',
  trailColor:'#00ffff',
  trailWidth: 13,
  svgStyle: null
});

var n=(incorrectAnswers/10);

bar.animate(n);
