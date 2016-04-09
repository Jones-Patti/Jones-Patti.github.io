  // Health Meter for Holy Burger
        var canvas = document.getElementById('gameScreen');
        canvas.width = 480;
        canvas.height = 800;
        var context = canvas.getContext('2d');

        var object1 = {
            x: 40,
            y: 400,
            width: 180,
            height: 20
        };

        var health = 10;
        var maxHealth = 10;

// Loop
        setInterval(onTimerTick, 33);

// Render Loop
        function onTimerTick() {

            // Clear the canvas
            canvas.width = canvas.width;

            // Calculate health bar percent
            var percent = health / maxHealth;

            context.fillStyle = "green";
            context.font = "18px slackey";
            context.fillText("Life " + health + "/" + maxHealth + " = " + percent * 100 + "%", 40, 380);

            context.fillStyle = "red";
            context.fillRect(object1.x, object1.y, object1.width, object1.height);

            context.fillStyle = "green";
            context.fillRect(object1.x, object1.y, object1.width * percent, object1.height);
        }

//        function contains(target, x, y) {
//            if (x >= target.x && x <= (target.x + target.width) && y >= target.y && y <= (target.y + target.height)) {
//                return true;
//            }
//            return false;
//        }

        // Update mouse position
//        canvas.onmousemove = function (e) {
//            var mouseX = e.offsetX;
//            var mouseY = e.offsetY;
//
//            if (contains(object1, mouseX, mouseY)) {
//                health = Math.round(((mouseX - object1.x) / object1.width) * maxHealth);
//            }
//        }

        // ENEMY HEALTH BAR
var canvas = document.getElementById('gameScreen');
canvas.width = 480;
canvas.height = 800;
var context2 = canvas.getContext('2d');

var object2 = {
    x2: 260,
    y2: 400,
    width2: 180,
    height2: 20
};

var health2 = 10;
var maxHealth2 = 10;

// Loop
setInterval(onTimerTick2, 33);

// Render Loop
function onTimerTick2() {

    // Clear the canvas
    canvas.width = canvas.width;
    
    // Calculate health bar percent
    var percent2 = health2 / maxHealth2;

    context2.fillStyle = "Red";
    context2.font = "18px slackey";
    context2.fillText("Enemy " +health2+"/"+maxHealth2+" = " + percent2 * 100 +"%", 260, 380);

    context2.fillStyle = "red";
    context2.fillRect(object2.x2, object2.y2, object2.width2, object2.height2);

    context2.fillStyle = "green";
    context2.fillRect(object2.x2, object2.y2, object2.width2 * percent2, object2.height2);
}

//function contains2(target2, x2, y2) {
//    if (x2 >= target2.x && x2 <= (target2.x2 + target2.width2) && y2 >= target2.y2 && y2 <= (target2.y2 + target.height2)) {
//        return true;
//    }
//    return false;
//}

// Update mouse position
//canvas2.onmousemove = function (f) {
//    var mouseX2 = f.offsetX;
//    var mouseY2 = f.offsetY;
//
//    if (contains2(object2, mouseX2, mouseY2)) {
//        health2 = Math.round(((mouseX2 - object2.x2) / object2.width2) * maxHealth2);
//    }
//}
