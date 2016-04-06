//Global Variables
var enemyAttack; //used for the periodical enemy strikes
var attackRate = 1000/1; 	//number of periodical attacks per second
var frameRate = 1000 / 20;
var frame = 0;				//used to track current frame
var enemyXLocation = 260;
var enemyYLocation = 150;
var enemyCanvas = null;
var enemyContext = null;
var ketchupAssets = [
	'resources/KeriKetchup/180keriketchup00.png'
];
var peteAssets = [
	'resources/PicklePete/180picklepete00.png'
];
var pepAssets = [
	'resources/PistolPep/180pistolpep00.png'
];
var tomAssets = [
	'resources/TerribleTom/180terribletom00.png'
];
var animationFrames = [];	//used to store animation frames
var standingImage = null;	//used to store current still-frame of enemy
var animated;				//used to track animation status

enemies = [];

function EnemyObject(enemyType) {
	//object data
	this.healthPoints = 10;
	this.attackValue = 1;
	this.currencyValue = 2;
	this.defense = 1;

	//object functions
	this.destroyEnemy = destroyEnemy;
	this.createEnemy = createEnemy;
	this.attack = attack;
	this.enemyType = enemyType;

	//Check for enemy type
	if (enemyType == "pistolPep")
	{
		this.healthPoints = 7;
	}
	else if (enemyType == "picklePete")
	{
		this.attackValue = 2;
	}
	else if (enemyType == "terribleTom")
	{
		this.healthPoints = 50;
		this.attackValue = 5;
	}
	else
	{
		//throw ArgumentException('Enemy type not recognized.')
	}
};

/*******************************************************
 * function destroyEnemy
 * Author: Patti Jones
 *******************************************************/

function destroyEnemy(enemy)
{
	//holyBurger.currency += enemy.currencyValue;
	//loadHolyMolies(holyBurger.currency);
	enemyContext.clearRect(enemyXLocation, enemyYLocation, 600, 600);

	/****************************************************************************************************
	 * Two options here. Option 1 is to pop the last enemy. This is appropriate while we only have one.
	 ****************************************************************************************************/
	enemies.pop();

	/***************************************************************************************************************
	 * Option two is to find the passed enemy and remove it, done in the commented line below. Provides more
	 * extensibility. This is the fixed version of what you had, but it requires an identifier in the enemy class.
	 ***************************************************************************************************************/
		//use if enemy has a unique identifier
		//for (var i = 0; 0 < enemies.length; i++) {
		//    if (enemies[i].id == enemy.id) {
		//        enemies.splice(i, 1);             //array.splice(index, number of objects to remove)
		//        break;
		//    }
		//}
	endEnemyAttack();
};

/*******************************************************
 * function createEnemy
 * Author: Patti Jones
 *******************************************************/

function createEnemy()
{
	var enemyType = [
		"pistolPep",
		"picklePete",
		"terribleTom"
	]; //using an array instead of an object association is a bit quicker and easier to handle.
	var randomNum = Math.floor(Math.random() *3); //0,1,2
	var enemy = new EnemyObject(enemyType[randomNum]);  //just get the string value of whatever array member corresponds with the random number
	enemies.push(enemy);
	drawInitial(enemyType[randomNum]);
	startEnemyAttack();
	return enemy;
};

function attack(attacker,defender)
{
	var attack = attacker.attackValue;
	var defense = defender.defense;

	var damageDealt = attack - defense; //may change this to: attack * attack / (attack + defense);
	if(damageDealt < 0) {
		damageDealt = 0;
	}
	defender.healthPoints -= damageDealt;

	if (defender.healthPoints <= 0)
	{
		if (defender instanceof Enemy)  //if the defender is an enemy
		{
			destroyEnemy(defender);
		}
		else {                          //the defender must be the character
			gameOver();
		}
	}
};

/**************************************************
 * Start Enemy Attack (Periodical function)
 **************************************************/
function startEnemyAttack() {
	//enemyAttack = setInterval(attack(enemies[0], holyBurger), attackRate); //have the enemy attack the character periodically
};

function endEnemyAttack() {
	clearInterval(enemyAttack); //Halt enemy onslaught
	enemyAttack = null;
};

function drawInitial(enemyType) {
	enemyCanvas = document.getElementById("gameScreen");
	enemyContext = enemyCanvas.getContext("2d");
	standingImage = new Image();
	switch(enemyType) {
		case "pistolPep":
			standingImage.src = "resources/PistolPep/180pistolpep00.png";
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < pepAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = pepAssets[i];
			}
			break;
		case "keriKetchup":
			standingImage.src = 'resources/KeriKetchup/180keriketchup00.png';
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < ketchupAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = ketchupAssets[i];
			}
			break;
		case "terribleTom":
			standingImage.src = 'resources/TerribleTom/180terribletom00.png';
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < tomAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = tomAssets[i];
			}
			break;
		case "picklePete":
			standingImage.src = 'resources/PicklePete/180picklepete00.png';
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < peteAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = peteAssets[i];
			}
			break;
	}
};

/***********************************************************************
 * LoadLevel()
 * Alters Enemy Stats based on the attributes of the holy burger object
 * in play.
 ***********************************************************************/
function loadLevel() {

};