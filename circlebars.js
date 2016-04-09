function CircleBars()
{
    //Health Upgrade Button - variables
    this.canvas = document.getElementById('gameScreen');
    this.context = this.canvas.getContext('2d');
    this.start = 4.72;
    this.cw = null;
    this.ch = null;
    this.radius = 50; //size of progress bar
    this.lw = 15;//line width for circle progress bar
    this.x = this.cw - this.radius - this.lw;
    this.y = this.ch - this.radius - this.lw;
    this.w = (this.radius * 2) + (this.lw * 2);
    this.h = (this.radius * 2) + (this.lw * 2);
    this.strokeStyle1;
    this.strokeStyle2;

    this.bars = ["burgerHealth", "enemyHealth"];
    this.pbars = ["healthUpg", "attackUpg", "defenseUpg"];

    this.updateHealthBar = function (newPercent, barName)
    {
        if (barName == "burgerHealth")
        {
            this.cw = this.context.canvas.width * .20;
            this.ch = this.context.canvas.height * .67;
            this.strokeStyle1 = '#24D330';
            this.strokeStyle2 = '#00611C';
        }
        else if (barName == "enemyHealth")
        {
            this.cw = this.context.canvas.width * .80;
            this.ch = this.context.canvas.height * .67;
            this.strokeStyle1 = '#24D330';
            this.strokeStyle2 = '#00611C';
        }

        var diff = (newPercent / 100) * Math.PI * 2;
        this.context.clearRect(this.x, this.y, this.w, this.h);
        this.context.beginPath();
        this.context.arc(this.cw, this.ch, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = '#FFF';
        this.context.fill();
        this.context.strokeStyle = this.strokeStyle1;  //strokeStyle1
        this.context.stroke();
        this.context.fillStyle = '#000';
        this.context.strokeStyle = this.strokeStyle2; //strokeStyle2
        this.context.textAlign = 'center';
        this.context.lineWidth = this.lw;
        this.context.font = '12px slackey';
        if (newPercent <= 100) {
            this.context.beginPath();
            this.context.arc(this.cw, this.ch, this.radius, this.start, diff + this.start, false);
            this.context.stroke();
            this.font = '18px slackey';
            this.context.fillText(newPercent + '%', this.cw + 2, this.ch - 10);
            this.font = '10px slackey';
            if (barName === "burgerHealth") {
                this.context.fillText("Life", this.cw + 2, this.ch + 5);
            }
            if (barName === "enemyHealth") {
            this.context.fillText("Enemy", this.cw + 2, this.ch + 5);
        }
        }
    }

    this.updateProgressBar = function (newPercent, pbarName)//seperated out the two types of bars, health vs progress. Each serve two different functions for the game. CG
    {
        if (pbarName == "healthUpg")
        {
            this.cw = this.context.canvas.width * .20;
            this.ch = this.context.canvas.height * .85;
            this.strokeStyle1 = '#e7f2ba';
            this.strokeStyle2 = '#b3cf3c';
        } else if (pbarName == "defenseUpg")
        {
            this.cw = this.context.canvas.width * .5;
            this.ch = this.context.canvas.height * .85;
            this.strokeStyle1 = '#ADD8E6';
            this.strokeStyle2 = '#42bfe7';
        } else if (pbarName == "attackUpg")
        {
            this.cw = this.context.canvas.width * .80;
            this.ch = this.context.canvas.height * .85;
            this.strokeStyle1 = '#fdd0d0';
            this.strokeStyle2 = '#d42727';
        }
        var diff = (newPercent / 100) * Math.PI * 2;
        this.context.clearRect(this.x, this.y, this.w, this.h);
        this.context.beginPath();
        this.context.arc(this.cw, this.ch, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = '#FFF';
        this.context.fill();
        this.context.strokeStyle = this.strokeStyle1;  //strokeStyle1
        this.context.stroke();
        this.context.fillStyle = '#000';
        this.context.strokeStyle = this.strokeStyle2; //strokeStyle2
        this.context.textAlign = 'center';
        this.context.lineWidth = this.lw;
        this.context.font = '12px slackey';
        if (newPercent < 100) {
            this.context.beginPath();
            this.context.arc(this.cw, this.ch, this.radius, this.start, diff + this.start, false);
            this.context.stroke();
            this.font = '18px slackey';
            this.context.fillText(newPercent + '%', this.cw + 2, this.ch - 10);
            this.font = '10px slackey';
            if (pbarName === "healthUpg") {
                this.context.fillText("Health", this.cw + 2, this.ch + 5);
            }
            if (pbarName === "defenseUpg") {
                this.context.fillText("Defense", this.cw + 2, this.ch + 5);
            }
            if (pbarName === "attackUpg") {
                this.context.fillText("Attack", this.cw + 2, this.ch + 5);
            }
        } else {
            this.context.fillStyle = '#008000'; //fillStyle
            this.context.strokeStyle = '#fff';
            this.context.font = 'bold 14px slackey';
            this.context.fillText("Upgrade", this.cw, this.ch - 10);
        }
        if (newPercent >= 100) {
            clearTimeout();
        }
    }




    this.drawInitialBars = function ()
    {
        for (var i = 0; i < this.bars.length; i++)
        {
            this.updateHealthBar(0, this.bars[i]);
        }
    }

    this.drawInitialPBars = function ()
    {
        for (var i = 0; i < this.pbars.length; i++)
        {
            this.updateProgressBar(0, this.pbars[i]);
        }
    }
    this.redrawBars = function () {
        this.drawInitialBars();
        this.drawInitialPBars();

    }
}