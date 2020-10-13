var startBtn = document.querySelector(".startGame");
let intro = document.querySelector(".intro");
let game = document.querySelector(".game");


startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    game.style.display = "block";
    startBtn = document.querySelector(".startGame").innerHTML = "Enjoy";
});

let x = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

document.getElementById('but1').addEventListener("click", () => {
    x[0] = true;
});
document.getElementById('but2').addEventListener("click", () => {
    x[1] = true;
});
document.getElementById('but3').addEventListener("click", () => {
    x[2] = true;
});
document.getElementById('but4').addEventListener("click", () => {
    x[3] = true;
});
document.getElementById('but5').addEventListener("click", () => {
    x[4] = true;
});

document.getElementById('but6').addEventListener("click", () => {
    x[5] = true;
});


document.getElementById('but7').addEventListener("click", () => {
    x[6] = true;
});
document.getElementById('but8').addEventListener("click", () => {
    x[7] = true;
});
document.getElementById('but9').addEventListener("click", () => {
    x[8] = true;
});
document.getElementById('but10').addEventListener("click", () => {
    x[9] = true;
});
document.getElementById('but11').addEventListener("click", () => {
    x[10] = true;
});
document.getElementById('but12').addEventListener("click", () => {
    x[11] = true;
});
document.getElementById('but13').addEventListener("click", () => {
    x[12] = true;
});
document.getElementById('but14').addEventListener("click", () => {
    x[13] = true;
});

document.getElementById('but15').addEventListener("click", () => {
    x[14] = true;
});
document.getElementById('but16').addEventListener("click", () => {
    x[15] = true;
});
document.getElementById('but17').addEventListener("click", () => {
    x[16] = true;
});
document.getElementById('but18').addEventListener("click", () => {
    x[17] = true;
});
document.getElementById('but19').addEventListener("click", () => {
    x[18] = true;
});
document.getElementById('but20').addEventListener("click", () => {
    x[19] = true;
});
document.getElementById('but21').addEventListener("click", () => {
    x[20] = true;
});
document.getElementById('but22').addEventListener("click", () => {
    x[21] = true;
});
document.getElementById('but23').addEventListener("click", () => {
    x[22] = true;
});
document.getElementById('but24').addEventListener("click", () => {
    x[23] = true;
});
document.getElementById('but25').addEventListener("click", () => {
    x[24] = true;
});
document.getElementById('but26').addEventListener("click", () => {
    x[25] = true;
});
document.getElementById('but27').addEventListener("click", () => {
    x[26] = true;
});
document.getElementById('but28').addEventListener("click", () => {
    x[27] = true;
});
document.getElementById('but29').addEventListener("click", () => {
    x[28] = true;
});
document.getElementById('but30').addEventListener("click", () => {
    x[29] = true;
});
document.getElementById('but31').addEventListener("click", () => {
    x[30] = true;
});
document.getElementById('but32').addEventListener("click", () => {
    x[31] = true;
});
document.getElementById('but33').addEventListener("click", () => {
    x[32] = true;
});
document.getElementById('but34').addEventListener("click", () => {
    x[33] = true;
});
document.getElementById('but35').addEventListener("click", () => {
    x[34] = true;
});
document.getElementById('but36').addEventListener("click", () => {
    x[35] = true;
});
document.getElementById('but37').addEventListener("click", () => {
    x[36] = true;
});
document.getElementById('but38').addEventListener("click", () => {
    x[37] = true;
});
document.getElementById('but39').addEventListener("click", () => {
    x[38] = true;
});
document.getElementById('but40').addEventListener("click", () => {
    x[39] = true;
});
document.getElementById('but41').addEventListener("click", () => {
    x[40] = true;
});
document.getElementById('but42').addEventListener("click", () => {
    x[41] = true;
});
document.getElementById('but43').addEventListener("click", () => {
    x[42] = true;
});
document.getElementById('but44').addEventListener("click", () => {
    x[43] = true;
});
document.getElementById('but45').addEventListener("click", () => {
    x[44] = true;
});
document.getElementById('but46').addEventListener("click", () => {
    x[45] = true;
});
document.getElementById('but47').addEventListener("click", () => {
    x[46] = true;
});

var butn = document.querySelectorAll(".myButton");
let gameOver = document.querySelector(".gameOver");
let count;

for (var i = 0; i < butn.length; i++) {
    butn[i].addEventListener("click", function() {
        count = 0;
        for (var j = 0; j <= 47; j++) {
            if (x[j] == true) {
                count++;
            }
        }
        if (count == butn.length) {
            document.querySelector(".graditude").style.display = "block";
            document.getElementById("win").style.background = "green";
            gameOver.style.display = "none";
        }
    });
}

var button = document.querySelectorAll('.myButton');

for (user of button) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "purple ";
        this.style.color = 'white';
        this.classList.add("myButton2");

    });

}


var userList = document.querySelectorAll('.ju');

for (user of userList) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "blue ";
    });
}

const mars = document.querySelectorAll(".mars ");

for (user of mars) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "purple ";
    });
}

const earth = document.querySelectorAll(".earth ");

for (user of earth) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "crimson";
    });
}

const uranus = document.querySelectorAll(".uranus ");

for (user of uranus) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "brown";
    });
}

const neptune = document.querySelectorAll(".neptune ");

for (user of neptune) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "red ";
    });
}

const venus = document.querySelectorAll(".venus ");

for (user of venus) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "cadetblue";
    });
}

const saturn = document.querySelectorAll(".saturn ");

for (user of saturn) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "orange ";
    });
}

const userLis = document.querySelectorAll(".me3 ");

for (user of userLis) {
    user.addEventListener("click", function() {
        this.style.backgroundColor = "chocolate";
    });
}