var questions = [
  {
      title: 'What is an example of a looping structure in JavaScript?',
      choices: ['A. for', 'B. while', 'C. do-while', 'D. all of the above'],
      answer: 'D. all of the above'
  },
  {
      title: 'What is one type of pop up boxes available in JavaScript?',
      choices: ['A. confirm and', 'B. why hello there', 'C. wrong answer', 'D. correct'],
      answer: 'A. confirm and'

  },
  {
      title: 'Which of the following keywords are used to define a variable in JavaScript?',
      choices: ['A. let', 'B. var', 'C. none of the above', 'D. both A and B'],
      answer: 'D. both A and B'
  },
  {
      title: 'How do we write a comment in JavaScript?',
      choices: ['A. //', 'B. #', 'C. $$', 'D. /**/'],
      answer: 'A. //'
  },
];

const getQuestions = () => {

fetch(questions[0]).then(data=>data.json()).then(questionData => {

    let questSection = document.querySelector('.quest');

    questSection.innerhtml = '';
    
    
    questSection.innerhtml +=`
    <div class="card">
    <section id="quest">
        <h2 id="questTitle">${Title}</h2>
        <button id="listChoices">${Choices}</button>
    </section>
    </div>
    `;

})
};
$('.beginBtn').on('click', getQuestions);

let question = eval(localStorage.questions) || []

const UseQuestions = () => {
    questions.forEach((question, i) => {
        question.push($('button').eq(i).val())
    })
    localStorage.questions = JSON.stringify(question)
}

console.log();