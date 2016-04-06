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
    'resources/HolyBurgerImage/60holyburger00.png',
    'resources/HolyBurgerImage/60holyburger01.png',
    'resources/HolyBurgerImage/60holyburger02.png',
    'resources/HolyBurgerImage/60holyburger03.png',
    'resources/HolyBurgerImage/60holyburger04.png',
    'resources/HolyBurgerImage/60holyburger05.png',
    'resources/HolyBurgerImage/60holyburger06.png',
    'resources/HolyBurgerImage/60holyburger07.png',
    'resources/HolyBurgerImage/60holyburger08.png',
    'resources/HolyBurgerImage/60holyburger09.png',
    'resources/HolyBurgerImage/60holyburger10.png',
    'resources/HolyBurgerImage/60holyburger11.png',
    'resources/HolyBurgerImage/60holyburger12.png',
    'resources/HolyBurgerImage/60holyburger13.png',
    'resources/HolyBurgerImage/60holyburger14.png',
    'resources/HolyBurgerImage/60holyburger15.png',
    'resources/HolyBurgerImage/60holyburger16.png',
    'resources/HolyBurgerImage/60holyburger17.png',
    'resources/HolyBurgerImage/60holyburger18.png',
    'resources/HolyBurgerImage/60holyburger19.png',
    'resources/HolyBurgerImage/60holyburger20.png'
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
    this.tempHealthPoints = 20;
    this.defense = 1;
    this.holyMoly = 0;
    
    //object function
    this.saveCharacter = saveCharacter();
    this.loadCharacter = loadCharacter();

    this.attack = function() {
        var damage = this.attackValue + parseInt(Math.random() * 3) - enemies[0].defense;
        if(damage < 0) {
            damage = 0;
        }
        enemies[0].tempHealthPoints -= damage;
        if(enemies[0].tempHealthPoints <= 0) {
            updateMessage(enemies[0].enemyType + " has been vanquished");
            destroyEnemy();
        }
        else {
            updateMessage(enemies[0].enemyType + " took " + damage + " damage!");
            gameObject.circleBars.updateHealthBar(parseInt((enemies[0].tempHealthPoints / enemies[0].healthPoints) * 100), "enemyHealth");
        }
    }
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
  if(holyBurger && gameObject) {
      holyBurger.holyMoly = gameObject.holyMoly;
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
      console.log("saved attack value: " + tempChar.attackValue);
      holyBurger.healthPoints = tempChar.healthPoints;
      console.log("saved health points value: " + tempChar.healthPoints);
      holyBurger.defense = tempChar.defense;
      console.log("saved defense value: " + tempChar.defense);
      holyBurger.holyMoly = tempChar.holyMoly;
      console.log("saved holyMoly value: " + tempChar.holyMoly);
      console.log("saved game moly value: " + tempChar.holyMoly);
      holyBurger.tempHealthPoints = tempChar.healthPoints;
      console.log("saved temp Health value: " + tempChar.tempHealthPoints);
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
    burgerStandingImage.src = "resources/HolyBurgerImage/60holyburger00.png";
    burgerStandingImage.onload = function () {
        enemyContext.drawImage(burgerStandingImage, burgerXLocation, burgerYLocation);
    };
    for(var i = 0; i < burgerAssets.length; i++) {
        burgerAnimationFrames.push(new Image());
        burgerAnimationFrames[i].src = pepAssets[i];
    }
};

/*******************************************************
* attackEnemy
********************************************************/
/*function attackEnemy(defender) {
  var attack = attacker.attackValue;
  var defense = defender.defense;

  var damageDealt = attack - defense;
  
  if(damageDealt < 0) {
    damageDealt = 0;
    addMessage('Holy Burger dealt no damage to ' + defender + '!');
  }
  defender.healthPoints -= damageDealt;

  if (defender.healthPoints <= 0)
  {
    destroyEnemy(defender);
    addMessage(defender + " was defeated!");
  }
}*/