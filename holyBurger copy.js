function startGame() {
	initializeScreen();
	loadHolyMolies(0); // Might need updating for saved stuff
	createHolyBurger();
    createEnemy();
    // changeBurgerHealth(100);
	// changeEnemyHealth(100); // needs to be commented out until these objects exist
}

document.addEventListener('DOMContentLoaded', function() {
	startGame();
});