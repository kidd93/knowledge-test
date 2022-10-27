var beginTest = document.getElementById('begin');
var list = document.getElementById('listChoices');
var timedTest = document.getElementById('timedTest');
var question = document.getElementById('quest');
var time;
var remainingTime = 0;
var testTime = question.length * 15;

const begin = () => {
  var intro = document.getElementById('intro');

  intro.setAttribute('class', 'hide');
  question.removeAttribute('class');
  time = setInterval(clockTick, 1000);

  timedTest.textContent = testTime;
  pullQuestions();
}

const pullQuestions = () => {
  var question = questions[remainingTime];

  var eachQuestion = document.getElementById('questTitle');
  eachQuestion.textContent = question.title;
  list.innerHTML = '';

  question.choices.forEach(function(choice, i) {

    var choices = document.createElement('button');
    choices.setAttribute('class', 'choice');
    choices.setAttribute('value', choice);

    choices.textContent = i + 1 + '. ' + choice;

    choices.onclick = questionClick;
    list.appendChild(choices);
  });
}

const clickQuestion = () => {
  if (this.value !== questions[remainingTime].answer) {
    testTime -= 15;

    if (testTime < 0) {
      testTime = 0;
    }
    timedTest.textContent = testTime;
  }
 remainingTime++;
  if (remainingTime === questions.length) {
    final();
  } else {
    return pullQuestions;
  }
}

const final = () => {
  clearInterval(time);

  var finale = document.getElementById('finale');
  finale.removeAttribute('class');

  var endScore = document.getElementById('myScore');
  endScore.textContent = time;

  question.setAttribute('class', 'hide');
}

const clockery = () => {
  testTime--;
  timedTest.textContent = testTime;
  if (time <= 0) {
    final();
  }
}

const saveScore = () => {
    var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    var scoring = {
      score: testTime,
    };

    scores.push(scoring);
    window.localStorage.setItem('scores', JSON.stringify(scores));
    window.location.href = 'scoring.html';
  }

beginTest.onClick = begin;