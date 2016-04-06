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
  document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
};

/************************************************************
 * Change Enemy Health (Used for the bar)
 * @param newPercent
 ************************************************************/
function changeEnemyHealth(newPercent) {
  document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
};


//TODO there's some redundant code and errors down here? \/

/********************************************************
* Function for Progress Bar
*********************************************************/
function increaseAttack() {
    if (holyMolies >= (upAttack)) {
        attack += 5;
        holyMolies -= upAttack;
   		upAttack = attack *2;
    }
};

function increaseDefense() {
    if (holyMolies >= (upDefense)) {
        defense += 5;
        holyMolies -= upDefense;
   		upDefense = defense *3;
        //
    }
};

function increaseHelth() {
    if (holyMolies >= (upHealth)) {
        health += 50;
        holyMolies -= upHealth;//
        upHealth = health *4;
    }
};

/********************************************************
* Update Progress Bar
*********************************************************/
function attackBar(){
	document.getElementById("increaseAttack").style.width = newPercent + "%";
}

function defenseBar(){
	document.getElementById("increaseDefense").style.width = newPercent + "%";
};

function healthBar(){
	document.getElementById("increaseHealth").style.width = newPercent + "%";
};

function updateBars(){
	newAttack=holyMolies/upAttack;
	document.getElementById("attackUpBar").style.width = newAttack % 1;
	newDefense=holyMolies/upDefense;
	document.getElementById("defenseUpBar").style.width = newDefenseBar % 1;
	newHealth=holyMolies/upAttack;
	document.getElementById("healthUpBar").style.width = newHealth % 1;
};