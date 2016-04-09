// Health Upgrade Click Event


buttonList = []; //held in addClickers

function addClickers() {
    var clickerCanvas = document.getElementById("gameScreen");
    clickerCanvas.addEventListener('click', function(event){
        var clickCanvas = document.getElementById("gameScreen");    //get the canvas
        var canvasTop = clickCanvas.offsetTop;                      //get the offset of the y axis
        var canvasLeft = clickCanvas.offsetLeft;                    //get the offset of the x axis
        var clickX = event.pageX;
        var clickY = event.pageY;
        for(var i = 0; i < buttonList.length; i++) {
            /*console.log("topEdge = " + buttonList[i].topEdge);
            console.log("bottomEdge = " + buttonList[i].bottomEdge);
            console.log("leftEdge = " + buttonList[i].leftEdge);
            console.log("rightEdge = " + buttonList[i].rightEdge);*/
            if(clickY > buttonList[i].topEdge && clickY < buttonList[i].bottomEdge && clickX > buttonList[i].leftEdge && clickX < buttonList[i].rightEdge){
                buttonList[i].tiedFunction();
                //alert("Did the function");
            }
        }
    }, false);
    buttonList.push(new ClickableButton(function() {holyBurger.attack();}, clickerCanvas.clientHeight *
        (125/800), clickerCanvas.clientWidth * (0/480), clickerCanvas.clientWidth, clickerCanvas.clientHeight * (275/800)));                    //holy burger clicker
    buttonList.push(new ClickableButton(function(){increaseHealth();}, clickerCanvas.clientHeight *
        (625/800), clickerCanvas.clientWidth * (50/480), clickerCanvas.clientWidth * (120/480), clickerCanvas.clientHeight * (125/800)));       //increaseHealth clicker
    buttonList.push(new ClickableButton(function(){increaseDefense();}, clickerCanvas.clientHeight *
        (625/800), clickerCanvas.clientWidth * (185/480), clickerCanvas.clientWidth * (120/480), clickerCanvas.clientHeight * (125/800)));      //increaseDefense clicker
    buttonList.push(new ClickableButton(function(){increaseAttack();}, clickerCanvas.clientHeight *
        (625/800), clickerCanvas.clientWidth * (325/480), clickerCanvas.clientWidth * (120/480), clickerCanvas.clientHeight * (125/800)));      //increaseAttack clicker
}

function ClickableButton(tiedFunction, topEdge, leftEdge, width, height) {
    this.tiedFunction = tiedFunction;       //function to be used on click
    this.topEdge = topEdge;                 //top edge of the clickable object
    this.leftEdge = leftEdge;               //left edge of the clickable object
    this.rightEdge = width + leftEdge;      //right edge of the clickable object
    this.bottomEdge = height + topEdge;     //bottom edge of the clickable object
}