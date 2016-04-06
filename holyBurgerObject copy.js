var burgerFrameRate = 1000 / 20;
var burgerFrame = 0;				//used to track current frame
var burgerXLocation = 50;
var burgerYLocation = 150;
var burgerCanvas = null;
var burgerContext = null;
var upAttack = null;
var upDefense = null;
var upHealth = null;
var burgerAssets = [
    'resources/HolyBurgerImage/180holyburger00.png'
];
var burgerAnimationFrames = [];	//used to store animation frames
var burgerStandingImage = null;	//used to store current still-frame of enemy
var burgerAnimated;				//used to track animation status
var holyBurger = null;

function HolyBurger()
{
    //object data
    this.attackValue = 1;
    this.healthPoints = 20;
    this.defense = 1;
    this.currency = 0;
    
    //object function
    this.saveCharacter = saveCharacter();
    this.loadCharacter = loadCharacter();
}

/*******************************************************
 * Create Holy Burger
 *******************************************************/
function createHolyBurger() {
    holyBurger = new HolyBurger();
    loadCharacter();
    drawBurgerInitial();
    upAttack = holyBurger.attackValue * 2;
    upDefense = holyBurger.defense * 3;
    upHealth = holyBurger.healthPoints * 4;
}

/*******************************************************
 * Saves character to localStorage
 * Author: Joseph Nixon
 *******************************************************/
function saveCharacter() {
  if(holyBurger) {
      localStorage.setItem('savedCharacter', JSON.stringify(holyBurger));
  }
}

/*******************************************************
* Loads character from LocalStorage
* Author: Joseph Nixon
*******************************************************/
function loadCharacter() {
  /*if (localStorage.savedCharacter) {
      var tempChar = JSON.parse(localStorage.savedCharacter);
      holyBurger.attackValue = tempChar.attackValue;
      holyBurger.healthPoints = tempChar.healthPoints;
      holyBurger.defense = tempChar.defense;
      holyBurger.currency = tempChar.currency;
  }
  else {
      return;
  }*/
  try {
      var tempChar = JSON.parse(localStorage.savedCharacter);
      holyBurger.attackValue = tempChar.attackValue;
      holyBurger.healthPoints = tempChar.healthPoints;
      holyBurger.defense = tempChar.defense;
      holyBurger.currency = tempChar.currency;
  }
  catch(e) {
        return;
    }
}

/*********************************************************
 * DrawBurgerInitial
 *********************************************************/
function drawBurgerInitial() {
    burgerCanvas = document.getElementById("gameScreen");
    burgerContext = burgerCanvas.getContext("2d");
    burgerStandingImage = new Image();
    burgerStandingImage.src = "resources/HolyBurgerImage/180holyburger00.png";
    burgerStandingImage.onload = function () {
        enemyContext.drawImage(burgerStandingImage, burgerXLocation, burgerYLocation);
    };
    for(var i = 0; i < burgerAssets.length; i++) {
        burgerAnimationFrames.push(new Image());
        burgerAnimationFrames[i].src = pepAssets[i];
    }
};