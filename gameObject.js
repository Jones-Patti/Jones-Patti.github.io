var height = 0;  //used for screen height
var width = 0;   //used for screen width
var nativeHeight = 800;
var nativeWidth = 480;


function GameObject()
{
    //object data
    
    //object functions
    this.initializeScreen = initializeScreen;
    this.loadHolyMolies = loadHolyMolies;
    this.changeBurgerHealth = changeBurgerHealth;
    this.changeEnemyHealth = changeEnemyHealth;
    this.toggleSound = toggleSound;
    
    this.upAttack = 100;
    this.upDefense = 100;
    this.upHealth = 100;
    
    this.holyMoly = null;//holy molies for the game stored here CG
    this.score = null;// score for the game stored here CG
    this.message = null;// most current message stored here CG
    
    this.circleBars;
    this.messageCenter;
    this.holyBurger;
    
    //this is what will run with the dom is loaded
    this.startGame = function()
    {
        initializeScreen();
        alert("Click ok to begin your crusade");
        loadHolyMolies(0); // Might need updating for saved stuff
        createHolyBurger();
        createEnemy();
        //initializeClickListeners();
        this.holyMoly = 0; //starting value of Holy Moly at game start
        this.score = 0; //starting value of Score at game start
        this.message = "Welcome to Holy Burger!"; //starting message in message center at game start
        
        this.circleBars = new CircleBars();
        this.holyBurger = new HolyBurger(this.circleBars);
        this.messageCenter = new MessageCenter();
        addClickers();
        this.circleBars.updateHealthBar(parseInt((holyBurger.tempHealthPoints / holyBurger.healthPoints) * 100), "burgerHealth");
        this.circleBars.updateHealthBar(parseInt((enemies[0].tempHealthPoints / enemies[0].healthPoints) * 100), "enemyHealth");
        loadCharacter();
        if(holyBurger != null) {
            var numMolies = holyBurger.holyMoly;
            this.holyMoly = numMolies;
        }
        this.circleBars.updateProgressBar(parseInt((this.holyMoly / this.upAttack) * 100), "attackUpg");
        this.circleBars.updateProgressBar(parseInt((this.holyMoly / this.upHealth) * 100), "healthUpg");
        this.circleBars.updateProgressBar(parseInt((this.holyMoly / this.upDefense) * 100), "defenseUpg");
    }
    
    //this runs start game once GameObject is created
    this.startGame();
};

/****************************************************
 * Sets up canvas and div by determining screen size
 ****************************************************/
function initializeScreen() {
  var initCanvas = document.getElementById("gameScreen");
  ctx = initCanvas.getContext("2d");
  window.addEventListener('resize', resize, false);
  window.addEventListener('orientationchange', resize, false);
  resize();
};

function changeScreen() {
  console.log("IMAGE HERE!");
  var canvas = document.getElementById("gameScreen");
  var ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var image = new Image();
  image.src = "pattiImage.png";
  image.onload = function() {
    ctx.drawImage(image, 0, 0);
  }
}

function resize() {
  width = window.innerWidth;                //get window width
  height = window.innerHeight;              //get window height
  var screen = document.getElementById("gameScreen");
  var scaleToFitX = width/nativeWidth;
  var scaleToFitY = height/nativeHeight;
  var currentRatio = width/height;
  var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
  var canvas = document.getElementById("gameScreen");

  if(currentRatio >= 1.77 && currentRatio <= 1.79) {
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  }
  else {
    canvas.style.width = nativeWidth * optimalRatio + "px";
    canvas.style.height = nativeHeight * optimalRatio + "px";
  }

  //Check for landscape
  if(width > height) {
      changeScreen();
      return;
  }
  //screen.width = width;  //set canvas width to 100%
  //screen.height = height; //set canvas height to 100%
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  loadHolyMolies(0);
  for(var i = 0; i < enemies.length; i++) {
    drawInitial(enemies[i].enemyType);
  }
  drawBurgerInitial();

   if (gameObject)
 {
   gameObject.circleBars.drawInitialBars(); // drawing initial health bars. Not sure this is needed, would prefer that the reDrawsBars() take care of all bar elements.
   gameObject.circleBars.redrawBars(); // should be drawing both health and progress bars
   gameObject.messageCenter.redrawAll(); //redrawsing all message center elements
 }
};

/*******************************************************
 * Updates Holy Molies. Takes a number.
 *******************************************************/
function loadHolyMolies(molies) {
  var screen = document.getElementById("gameScreen").getContext('2d');
  screen.font = '24px "Slackey" cursive';
  screen.fillStyle = '#FFDF00';
  screen.textBaseline = 'top';
  screen.fillText  (molies, width*0.01, height * 0.01); //Fills screen with number of molies
};

/*************************************************
 * Toggle Sound
 *************************************************/
function toggleSound() {
  var sound = document.getElementById("backgroundSound");
  if(sound.muted === true){
    sound.muted = false;
  }
  else {
    sound.muted = true;
  }
};

/*******************************************************
* function gameOver
* Author: Patti Jones
*******************************************************/
function gameOver()
{
	isGameOver = true;
	alert("Looks like Holy Burger is now Holy Charcoal.");
};

/******************************************************
 * Change Burger Health (used for the bar)
 * @param newPercent
 ******************************************************/
function changeBurgerHealth(newPercent) {
  //document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
  gameObject.circleBars.updateHealthBar(newPercent, "burgerHealth");
};

/************************************************************
 * Change Enemy Health (Used for the bar)
 * @param newPercent
 ************************************************************/
function changeEnemyHealth(newPercent) {
  //document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
  gameObject.circleBars.updateHealthBar(newPercent, "enemyHealth");
};


//TODO there's some redundant code and errors down here? \/

/********************************************************
* Function for Progress Bar
*********************************************************/
function increaseAttack() {
  if (gameObject.holyMoly >= gameObject.upAttack) {
    holyBurger.attackValue += 5;
    gameObject.holyMoly = parseInt(gameObject.holyMoly - gameObject.upAttack);
    updateHolyMolies(0);
    updateMessage("Attack Upgraded!");
    gameObject.upAttack = parseInt(gameObject.upAttack * 1.3);
    updateBars();
  }
};

function increaseDefense() {
  if (gameObject.holyMoly >= gameObject.upDefense) {
    holyBurger.defense += 5;
    gameObject.holyMoly = parseInt(gameObject.holyMoly - gameObject.upDefense);
    updateHolyMolies(0);
    updateMessage("Defense Upgraded!");
    gameObject.upDefense = parseInt(gameObject.upDefense * 1.4);
    updateBars();
  }
};

function increaseHealth() {
  if (gameObject.holyMoly >= gameObject.upHealth) {
    holyBurger.healthPoints += 5;
    holyBurger.tempHealthPoints = holyBurger.healthPoints;
    gameObject.holyMoly = parseInt(gameObject.holyMoly - gameObject.upHealth);
    updateHolyMolies(0);
    updateMessage("Health Upgraded!");
    gameObject.upHealth = parseInt(gameObject.upHealth * 1.5);
    updateBars();
  }
};

/********************************************************
* Update Progress Bar
*********************************************************/
/*function attackBar(){
	document.getElementById("increaseAttack").style.width = newPercent + "%";
}

function defenseBar(){
	document.getElementById("increaseDefense").style.width = newPercent + "%";
};

function healthBar(){
	document.getElementById("increaseHealth").style.width = newPercent + "%";
};
*/
function updateBars(){
    /*var attackPercent = gameObject.holyMoly / gameObject.upAttack;
    var healthPercent = gameObject.holyMoly / gameObject.upHealth;
    var defensePercent = gameObject.holyMoly / gameObject.upDefense;
    if(attackPercent > 1) {
        attackPercent = 1;
    }*/
    gameObject.circleBars.updateProgressBar(parseInt((gameObject.holyMoly / gameObject.upAttack) * 100), "attackUpg");
    gameObject.circleBars.updateProgressBar(parseInt((gameObject.holyMoly / gameObject.upHealth) * 100), "healthUpg");
    gameObject.circleBars.updateProgressBar(parseInt((gameObject.holyMoly / gameObject.upDefense) * 100), "defenseUpg");
}

/*********************************************************
* Display High scores
*********************************************************/
function displayScores() {
  var scores = getHighScores();
  var string = "High scores!\n\n";
  for (var i = 0; i < scores.length; i++) {
    if (i != 0) {
      string += "\n";
    }
    string += (i + 1) + ": " + scores[i];
  }
  alert(string);
}
/*********************************************************
* Update Message Center
*********************************************************/
function updateMessage(message) {
  gameObject.message = message;
  gameObject.messageCenter.redrawAll();
}
/*********************************************************
* Update Score
*********************************************************/
function updateScore(amount) {
  gameObject.score = gameObject.score + amount;
  gameObject.messageCenter.redrawAll();
}

/*********************************************************
* Update Holy Molies
*********************************************************/
function updateHolyMolies(amount) {
  gameObject.holyMoly = gameObject.holyMoly + amount;
  gameObject.messageCenter.redrawAll();
}
