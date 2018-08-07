// Initialize variables
var scores, roundScore, activePlayer, gamePlaying;

// Declare variables
init();

var lastDice;

// Add event listener when the 'roll' button is clicked
document.querySelector('.btn-roll').addEventListener('click', function() {

  if(gamePlaying) {
    // 1. Update the random number of the die
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // 2. Update the display of the die
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + die1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + die2 + '.png';

    // 3. Update the round score
    if (die1 !== 1 && die2 !== 2) {
      // Add score and display it
      roundScore += die1 + die2;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
      // Change the active player
      nextPlayer();
    }
  }
});

// Add event listener when the 'hold' button is clicked
document.querySelector('.btn-hold').addEventListener('click', function() {

  if(gamePlaying) {
    // Add current score to total score
    scores[activePlayer] += roundScore;

    // Update the display of total score
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Update display given the input value
    var input = document.querySelector('.final-score').value;
    var winningScore;

    // Undefined, 0, null, or "" are coerced to false
    if(input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if the player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById('name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // Change the active player
      nextPlayer();
    }
  }
});

// Add event listener when the 'new game' button is clicked
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {

  // Reset current player's score and move to the next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  // Update the display of each player's score
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Update the background color indicating the active player
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // Update the display of the die to transparent
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

function init() {

  // Declare variables on startup
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // Set the initial value of the die to transparent on startup
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  // Set the initial values of the scores for each player on startup
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Set the initial values of the names for each player on startup
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // Ensure there aren't any active or winner classes added to classes
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
