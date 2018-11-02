var crystalNumber = [];
winCount = 0;
lossCount = 0;
var randNumber = 0;
function resetVars() {
    randNumber = Math.floor(Math.random() * 102) + 19;
    for (let x = 0; x < 4; x++) {
        crystalNumber[x] = Math.floor(Math.random() * 12) + 1;
    }
}

$(window).on('load', function () {
resetVars();
    for (let y = 0; y < 4; y++) {
        $("#c" + String(y)).on("click", function (event) {
            randNumber -= crystalNumber[y];
            console.log(randNumber);
            $("#score").text(randNumber);
            $("#gametext").text("");
            checkWL();
        });

        function checkWL() {
            if (randNumber === 0) {
                $("#gametext").text("you won!");
                winCount++;
                $("#scoreWL").text("wins: " + winCount + "  losses: " + lossCount);
                resetVars();
                $("#score").text("new number: "+randNumber);
            } else if (randNumber < 0) {
                $("#score").text("you lost!");
                lossCount++;
                $("#scoreWL").text("wins: " + winCount + "  losses: " + lossCount);
                resetVars();
                $("#gametext").text("new number: "+ randNumber);
            }
        }
    }
});