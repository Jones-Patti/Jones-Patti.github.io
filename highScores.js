/********************************************************
 * This function either returns the existing high scores
 * or an array of empty scores.
 *******************************************************/
function getHighScores() {
	// if the highScore varialble exists in local storage
	if (localStorage.highScore != null) {
		return JSON.parse(localStorage.getItem("highScore"));
	} else {
		return [0, 0, 0, 0, 0];
	}
}

/********************************************************
 * This function takes an intager and adds it to the
 * highScores variable if it belongs there
 *******************************************************/
function setHighScore(newScore) {
	// get the high scores
	var hs = getHighScores();
	// create a boolean
	var isHighScore = false;

	// loop through highScore array
	for (var i = hs.length - 1; i >= 0; i--) {
		// if hs element is less than or equal to the newScore
		if(hs[i] <= newScore) {
			// boolean is true
			isHighScore = true;
			// leave loop
			break;
		}
	}
	// if that value is a high score
	if (isHighScore) {
		// attach to array
		hs.push(newScore);
		// sort array
		hs.sort(function(a, b){return b-a});
		// if array is more than 5 long
		if (hs.length > 5) {
			// remove lowest value
			hs.pop();
		}
	}
	localStorage.setItem('highScore', JSON.stringify(hs));
}