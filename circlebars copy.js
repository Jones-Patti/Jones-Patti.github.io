//Health Upgrade Button
var canvas = document.getElementById('gameScreen');
var context = canvas.getContext('2d');
var al = 0;
var start = 4.72;
var cw = context.canvas.width * .20;
var ch = context.canvas.height * .75;
var diff;
var radius = 50; //size of progress bar
var lw = 15;//line width for circle progress bar
var x = cw - radius - lw;
var y = ch - radius - lw;
var w = (radius * 2) + (lw * 2);
var h = (radius * 2) + (lw * 2);
var health = "Health";

function progressBar() {
    diff = (al / 100) * Math.PI * 2;
    context.clearRect(x, y, w, h);
    context.beginPath();
    context.arc(cw, ch, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#FFF';
    context.fill();
    context.strokeStyle = '#e7f2ba';
    context.stroke();
    context.fillStyle = '#000';
    context.strokeStyle = '#b3cf3c';
    context.textAlign = 'center';
    context.lineWidth = lw;
    context.font = '10pt slackey';
    if (al < 100) {
        context.beginPath();
        context.arc(cw, ch, radius, start, diff + start, false);
        context.stroke();
        context.fillText(al + '%', cw + 2, ch + 1);
        context.fillText(health, cw + 2, ch + 15);
    } else {
        context.fillStyle = '#008000';
        context.strokeStyle = '#fff';
        context.font = 'bold 14px slackey';
        context.fillText("Upgrade", cw + 2, ch + 6);

    }
    if (al >= 100) {
        clearTimeout(bar);
    }

    al++;
}

var bar = setInterval(progressBar, 50);

//Defense Upgrade Button
var canvas2 = document.getElementById('gameScreen');
var context2 = canvas2.getContext('2d');
var al2 = 0;
var start2 = 4.72;
var cw2 = context2.canvas.width * .5;
var ch2 = context2.canvas.height * .75;
var diff2;
var radius2 = 50; //size of progress bar
var lw2 = 15;//line width for circle progress bar
var x2 = cw2 - radius2 - lw2;
var y2 = ch2 - radius2 - lw2;
var w2 = (radius2 * 2) + (lw2 * 2);
var h2 = (radius2 * 2) + (lw2 * 2);
var defense = "Defense";

function progressBar2() {
    diff2 = (al2 / 100) * Math.PI * 2;
    context2.clearRect(x2, y2, w2, h2);
    context2.beginPath();
    context2.arc(cw2, ch2, radius2, 0, 2 * Math.PI, false);
    context2.fillStyle = '#FFF';
    context2.fill();
    context2.strokeStyle = '#ADD8E6';
    context2.stroke();
    context2.fillStyle = '#000';
    context2.strokeStyle = '#42bfe7';
    context2.textAlign = 'center';
    context2.lineWidth = lw2;
    context2.font = '10pt slackey';
    if (al2 < 100) {
        context2.beginPath();
        context2.arc(cw2, ch2, radius2, start2, diff2 + start2, false);
        context2.stroke();
        context2.fillText(al2 + '%', cw2 + 2, ch2 + 1);
        context2.fillText(defense, cw2 + 2, ch2 + 15);
    } else {
        context2.fillStyle = '#0000ff';
        context2.strokeStyle = '#fff';
        context2.font = 'bold 14px slackey';
        context2.fillText("Upgrade", cw2 + 2, ch2 + 6);

    }
    if (al2 >= 100) {
        clearTimeout(bar2);
    }

    al2++;

}

var bar2 = setInterval(progressBar2, 50);


//Attack Upgrade Button
var canvas3 = document.getElementById('gameScreen');
var context3 = canvas3.getContext('2d');
var al3 = 0;
var start3 = 4.72;
var cw3 = context3.canvas.width * .80;
var ch3 = context3.canvas.height * .75;
var diff3;
var radius3 = 50; //size of progress bar
var lw3 = 15;//line width for circle progress bar
var x3 = cw3 - radius3 - lw3;
var y3 = ch3 - radius3 - lw3;
var w3 = (radius3 * 2) + (lw3 * 2);
var h3 = (radius3 * 2) + (lw3 * 2);
var attack = "Attack";

function progressBar3() {
    diff3 = (al3 / 100) * Math.PI * 2;
    context3.clearRect(x3, y3, w3, h3);
    context3.beginPath();
    context3.arc(cw3, ch3, radius3, 0, 2 * Math.PI, false);
    context3.fillStyle = '#FFF';
    context3.fill();
    context3.strokeStyle = '#fdd0d0';
    context3.stroke();
    context3.fillStyle = '#000';
    context3.strokeStyle = '#d42727';
    context3.textAlign = 'center';
    context3.lineWidth = lw3;
    context3.font = '10pt slackey';
    if (al3 < 100) {
        context3.beginPath();
        context3.arc(cw3, ch3, radius3, start3, diff3 + start3, false);
        context3.stroke();
        context3.fillText(al3 + '%', cw3 + 2, ch3 + 1);
        context3.fillText(attack, cw3 + 2, ch3 + 15);
    } else {
        context3.fillStyle = '#ff0000';
        context3.strokeStyle = '#fff';
        context3.font = 'bold 14px slackey';
        context3.fillText("Upgrade", cw3 + 2, ch3 + 6);

    }

    if (al3 >= 100) {
        clearTimeout(bar3);
    }

    al3++;

}

var bar3 = setInterval(progressBar3, 50);


