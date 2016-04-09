function MessageCenter() {

    this.messageCanvas = document.getElementById('gameScreen');
    this.messageContext = this.messageCanvas.getContext('2d');
    this.messageW = this.messageCanvas.width;
    this.messageH = 120;
    this.messageX = this.messageCanvas.width * .35;
    this.messageY = this.messageCanvas.height * .57; //should probably do messageCanvas.width

    this.cw = null;
    this.ch = null;

    this.drawOutline = function () {
        this.messageContext.beginPath();
        this.messageContext.clearRect(this.messageX, this.messageY, this.messageW * .3125, this.messageH);
        this.messageContext.rect(0, this.messageY-60, this.messageW, this.messageH/2);
        this.messageContext.fillStyle = '#555';
        this.messageContext.fill();
    }

    this.drawTitle = function () {
        this.messageContext.font = "24px slackey";
        this.messageContext.textAlign = 'center';
        this.messageContext.fillStyle = 'red';
        this.messageContext.fillText("Message", this.messageW / 2, this.messageY);
        this.messageContext.fillText("Center", this.messageW / 2, this.messageY + 20);
    }

    this.drawMessage = function () {
        this.messageContext.font = "16px slackey";
        this.messageContext.textAlign = 'center';
        this.messageContext.fillStyle = 'red';
        this.messageContext.fillText(gameObject.message, this.messageW / 2, this.messageH+295);
    }

    this.drawGameTitle = function () {
        this.messageContext.font = "40px slackey";
        this.messageContext.textAlign = 'center';
        this.messageContext.fillStyle = 'red';
        this.messageContext.fillText("HOLY BURGER", this.messageW / 2, 50);
    }
    this.drawGameScore = function () {
        this.messageContext.clearRect(0, 0, this.messageW , 50);
        this.messageContext.font = "16px slackey";
        this.messageContext.textAlign = 'right';
        this.messageContext.fillStyle = 'red';
        this.messageContext.fillText("Score: " + gameObject.score, this.messageW - 20, 20);
    }

    this.drawHolyMoly = function () {
        this.messageContext.font = "16px slackey";
        this.messageContext.textAlign = 'left';
        this.messageContext.fillStyle = 'yellow';
        this.messageContext.fillText("Holy Molies: " + gameObject.holyMoly, 20, 20);
    }


//    this.drawBackgroundImage = function () { //add background image Holy Burger Shack
//        this.img = new Image();
//        this.img.src = "img/hbshack.png";
//        this.img.onload = function () {
//            this.messageContext.drawImage(this.img, this.messageW/2, 0);
//        }
//    }

//    this.drawBackground = function () { //background layer for better game ui feel
//        this.canvas = document.getElementById('gameScreen');
//        this.context = this.canvas.getContext('2d');
//        this.w = this.canvas.width;
//        this.h = this.canvas.height;
//        this.context.beginPath();
//        this.context.arc(w / 2, 300, w / 2, 0, Math.PI, true);
//        this.context.closePath();
//        this.context.lineWidth = 5;
//        this.context.fillStyle = '#222';
//        this.context.fill();
//        this.context.beginPath();
//        this.context.rect(0, 300, w, h * .65);
//        this.context.fillStyle = '#222';
//        this.context.fill();
//        this.context.lineWidth = 7;
//    }





    this.redrawAll = function () {
        this.messageContext.clearRect(this.messageX, this.messageY, this.messageW * .3125, this.messageH);
        this.messageContext.rect(this.messageX, this.messageY, this.messageW * .3125, this.messageH); //increase top portion to include the title (around 27%)
        this.drawOutline();
        this.drawTitle();
        this.drawMessage();
        this.drawGameTitle();
        this.drawGameScore();
        this.drawHolyMoly();

//        this.drawBackgroundImage()
//        this.drawBackground();
    }
}