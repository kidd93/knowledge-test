const highScores = () => {
    var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    scores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      var scoreList = document.createElement('li');
      scoreList.textContent = score.score;

      var scores = document.getElementById('scores');
      scores.appendChild(scoreList);
    });

  }
  const deleteScores = () => {
    window.localStorage.removeItem('scores');
    window.location.reload();
  }
  
  document.getElementById('delete').onclick = deleteScores;
  highScores();