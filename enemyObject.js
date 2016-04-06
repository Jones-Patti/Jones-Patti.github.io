//Global Variables
var enemyAttack = null; //used for the periodical enemy strikes
var attackRate = 1000/.25; 	//number of periodical attacks per second
var frameRate = 1000 / 20;
var frame = 0;				//used to track current frame
var enemyXLocation = 260;
var enemyYLocation = 150;
var enemyCanvas = null;
var enemyContext = null;
var ketchupAssets = [
	'resources/KeriKetchup/60keriketchup00.png',
	'resources/KeriKetchup/60keriketchup01.png',
	'resources/KeriKetchup/60keriketchup02.png',
	'resources/KeriKetchup/60keriketchup03.png',
	'resources/KeriKetchup/60keriketchup04.png',
	'resources/KeriKetchup/60keriketchup05.png',
	'resources/KeriKetchup/60keriketchup06.png',
	'resources/KeriKetchup/60keriketchup07.png',
	'resources/KeriKetchup/60keriketchup08.png',
	'resources/KeriKetchup/60keriketchup09.png',
	'resources/KeriKetchup/60keriketchup10.png',
	'resources/KeriKetchup/60keriketchup11.png',
	'resources/KeriKetchup/60keriketchup12.png',
	'resources/KeriKetchup/60keriketchup13.png',
	'resources/KeriKetchup/60keriketchup14.png',
	'resources/KeriKetchup/60keriketchup15.png',
	'resources/KeriKetchup/60keriketchup16.png',
	'resources/KeriKetchup/60keriketchup17.png',
	'resources/KeriKetchup/60keriketchup18.png',
	'resources/KeriKetchup/60keriketchup19.png',
	'resources/KeriKetchup/60keriketchup20.png',
	'resources/KeriKetchup/60keriketchup21.png',
	'resources/KeriKetchup/60keriketchup22.png',
	'resources/KeriKetchup/60keriketchup23.png',
	'resources/KeriKetchup/60keriketchup24.png'
];
var peteAssets = [
	'resources/PicklePete/60picklepete00.png',
	'resources/PicklePete/60picklepete01.png',
	'resources/PicklePete/60picklepete02.png',
	'resources/PicklePete/60picklepete03.png',
	'resources/PicklePete/60picklepete04.png',
	'resources/PicklePete/60picklepete05.png',
	'resources/PicklePete/60picklepete06.png',
	'resources/PicklePete/60picklepete07.png',
	'resources/PicklePete/60picklepete08.png',
	'resources/PicklePete/60picklepete09.png',
	'resources/PicklePete/60picklepete10.png',
	'resources/PicklePete/60picklepete11.png',
	'resources/PicklePete/60picklepete12.png',
	'resources/PicklePete/60picklepete13.png',
	'resources/PicklePete/60picklepete14.png',
	'resources/PicklePete/60picklepete15.png',
	'resources/PicklePete/60picklepete16.png',
	'resources/PicklePete/60picklepete17.png',
	'resources/PicklePete/60picklepete18.png',
	'resources/PicklePete/60picklepete19.png',
	'resources/PicklePete/60picklepete20.png',
	'resources/PicklePete/60picklepete21.png',
	'resources/PicklePete/60picklepete22.png',
	'resources/PicklePete/60picklepete23.png',
	'resources/PicklePete/60picklepete24.png',
	'resources/PicklePete/60picklepete25.png',
	'resources/PicklePete/60picklepete26.png',
	'resources/PicklePete/60picklepete27.png',
	'resources/PicklePete/60picklepete28.png',
	'resources/PicklePete/60picklepete29.png',
	'resources/PicklePete/60picklepete30.png',
	'resources/PicklePete/60picklepete31.png',
	'resources/PicklePete/60picklepete32.png',
	'resources/PicklePete/60picklepete33.png',
	'resources/PicklePete/60picklepete34.png',
	'resources/PicklePete/60picklepete35.png',
	'resources/PicklePete/60picklepete36.png',
	'resources/PicklePete/60picklepete37.png',
	'resources/PicklePete/60picklepete38.png',
	'resources/PicklePete/60picklepete39.png',
	'resources/PicklePete/60picklepete40.png',
	'resources/PicklePete/60picklepete41.png',
	'resources/PicklePete/60picklepete42.png',
	'resources/PicklePete/60picklepete43.png',
	'resources/PicklePete/60picklepete44.png',
	'resources/PicklePete/60picklepete45.png',
	'resources/PicklePete/60picklepete46.png',
	'resources/PicklePete/60picklepete47.png',
	'resources/PicklePete/60picklepete48.png',
	'resources/PicklePete/60picklepete49.png',
	'resources/PicklePete/60picklepete50.png',
	'resources/PicklePete/60picklepete51.png',
	'resources/PicklePete/60picklepete52.png',
	'resources/PicklePete/60picklepete53.png',
	'resources/PicklePete/60picklepete54.png',
	'resources/PicklePete/60picklepete55.png',
	'resources/PicklePete/60picklepete56.png',
	'resources/PicklePete/60picklepete57.png',
	'resources/PicklePete/60picklepete58.png',
	'resources/PicklePete/60picklepete59.png',
	'resources/PicklePete/60picklepete60.png',
	'resources/PicklePete/60picklepete61.png',
	'resources/PicklePete/60picklepete62.png',
	'resources/PicklePete/60picklepete63.png',
	'resources/PicklePete/60picklepete64.png',
	'resources/PicklePete/60picklepete65.png',
	'resources/PicklePete/60picklepete66.png',
	'resources/PicklePete/60picklepete67.png',
	'resources/PicklePete/60picklepete68.png',
	'resources/PicklePete/60picklepete69.png',
	'resources/PicklePete/60picklepete70.png',
	'resources/PicklePete/60picklepete71.png',
	'resources/PicklePete/60picklepete72.png',
	'resources/PicklePete/60picklepete73.png',
	'resources/PicklePete/60picklepete74.png'
];
var pepAssets = [
	'resources/PistolPep/60pistolpep00.png',
	'resources/PistolPep/60pistolpep01.png',
	'resources/PistolPep/60pistolpep02.png',
	'resources/PistolPep/60pistolpep03.png',
	'resources/PistolPep/60pistolpep04.png',
	'resources/PistolPep/60pistolpep05.png',
	'resources/PistolPep/60pistolpep06.png',
	'resources/PistolPep/60pistolpep07.png',
	'resources/PistolPep/60pistolpep08.png',
	'resources/PistolPep/60pistolpep09.png',
	'resources/PistolPep/60pistolpep10.png',
	'resources/PistolPep/60pistolpep11.png',
	'resources/PistolPep/60pistolpep12.png',
	'resources/PistolPep/60pistolpep13.png',
	'resources/PistolPep/60pistolpep14.png'

];
var tomAssets = [
	'resources/TerribleTom/60terribletom00.png',
	'resources/TerribleTom/60terribletom01.png',
	'resources/TerribleTom/60terribletom02.png',
	'resources/TerribleTom/60terribletom03.png',
	'resources/TerribleTom/60terribletom04.png',
	'resources/TerribleTom/60terribletom05.png',
	'resources/TerribleTom/60terribletom06.png',
	'resources/TerribleTom/60terribletom07.png'
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
	//this.destroyEnemy = destroyEnemy;
	//this.createEnemy = createEnemy;
	this.enemyType = enemyType;

	//Check for enemy type
	if (enemyType === "pistolPep")
	{
		this.healthPoints = 7;
	}
	else if (enemyType === "picklePete")
	{
		this.attackValue = 2;
	}
	else if (enemyType === "terribleTom")
	{
		this.healthPoints = 50;
		this.attackValue = 5;
	}
	else
	{
		//throw ArgumentException('Enemy type not recognized.')
	}

	this.attack = function() {
		if(gameObject != null) {
			var damage = this.attackValue - holyBurger.defense;
			if (damage < 0) {
				damage = 0;
			}

			holyBurger.tempHealthPoints -= damage;
			if (holyBurger.tempHealthPoints <= 0) {
				updateMessage("You have been defeated!");
				endEnemyAttack();
				gameOver();
			}
			else {
				updateMessage("Holy Burger has taken " + damage + " damage!");
				gameObject.circleBars.updateHealthBar(parseInt((holyBurger.tempHealthPoints / holyBurger.healthPoints) * 100), "burgerHealth");
			}
		}
	}

	this.tempHealthPoints = this.healthPoints;
};

/*******************************************************
 * function destroyEnemy
 * Author: Patti Jones
 *******************************************************/

function destroyEnemy()
{
	//holyBurger.currency += enemy.currencyValue;
	//loadHolyMolies(holyBurger.currency);
	enemyContext.clearRect(enemyXLocation, enemyYLocation, window.innerWidth *.4, window.innerHeight * (225/800));
	gameObject.holyMoly += 50;
	updateHolyMolies(gameObject.holyMoly);
	updateScore(50);
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
	updateBars();
	saveCharacter();
	createEnemy();
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
	if(gameObject) {
		gameObject.circleBars.updateHealthBar(parseInt((enemies[0].tempHealthPoints / enemies[0].healthPoints) * 100), "enemyHealth");
	}
	startEnemyAttack();
	return enemy;
};

/**************************************************
 * Start Enemy Attack (Periodical function)
 **************************************************/
function startEnemyAttack() {
	enemyAttack = setInterval(function(){enemies[0].attack();}, attackRate); //have the enemy attack the character periodically
	//enemies[0].attack();
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
			standingImage.src = "resources/PistolPep/60pistolpep00.png";
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < pepAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = pepAssets[i];
			}
			break;
		case "keriKetchup":
			standingImage.src = 'resources/KeriKetchup/60keriketchup00.png';
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < ketchupAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = ketchupAssets[i];
			}
			break;
		case "terribleTom":
			standingImage.src = 'resources/TerribleTom/60terribletom00.png';
			standingImage.onload = function () {
				enemyContext.drawImage(standingImage, enemyXLocation, enemyYLocation);
			};
			for(var i = 0; i < tomAssets.length; i++) {
				animationFrames.push(new Image());
				animationFrames[i].src = tomAssets[i];
			}
			break;
		case "picklePete":
			standingImage.src = 'resources/PicklePete/60picklepete00.png';
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

function animate() {

}
