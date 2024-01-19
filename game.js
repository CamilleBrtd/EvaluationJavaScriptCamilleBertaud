// Déclaration des variables
let score = 0;
let currentPlayer = "1";
let isRollDice = false;
let result = 0;
let current1 = 0;
let current2 = 0;

// Fonction pour lancer les dés
function rollDice() {
    result = Math.floor(Math.random() *6) + 1;
    console.log(result, currentPlayer);
    score += result;


    // Affichage du score et du dé
    document.getElementById('score'+ currentPlayer).innerText = score;
    document.getElementById('result').innerText = result;
    changePlayer();
    document.getElementById('currentPlayer').innerText = currentPlayer;
    console.log(currentPlayer)
}

//Fonctions de remise à zéro 
function resetScore() {
    score = 0;
    document.getElementById('score'+ currentPlayer).innerText = score;
}

function resetResult() {
    result = 0
    document.getElementById('result').innerText = "";
}

function resetCurrent1() {
    current1 = 0;
    document.getElementById('current1').innerText = current1;
}

function resetCurrent2() {
    current2 = 0;
    document.getElementById('current2').innerText = current2;
}

function restCurrentPlayer() {
    currentPlayer = "1";
    document.getElementById('currentPlayer').innerText = currentPlayer;

}

// Fonction pour changer de joueur
function changePlayer() {
    if (result == 1) {
       resetScore();
        if (currentPlayer == "1") {
            currentPlayer = "2";
        } else {
            currentPlayer = "1";
        }
    }
}

// Fonction pour ajouter le score au global

function hold() {
    if (currentPlayer == "1") {
        current1 += score;
        resetScore();
        document.getElementById('current1').innerText = current1;
        currentPlayer = "2";
    } else {
        current2 += score;
        resetScore();
        document.getElementById('current2').innerText = current2;
        currentPlayer = "1";
    }

    winner();
}

// Activer et désactiver les button de jeu

function disableButtons() {
    var rollButton = document.getElementById('dice').querySelector('[onclick="rollDice()"]');
    var holdButton = document.getElementById('dice').querySelector('[onclick="hold()"]');
    rollButton.disabled = true;
    holdButton.disabled = true;
}

function enableButtons() {
    var rollButton = document.getElementById('dice').querySelector('[onclick="rollDice()"]');
    var holdButton = document.getElementById('dice').querySelector('[onclick="hold()"]');
    rollButton.disabled = false;
    holdButton.disabled = false;
}

// Détermination du gagnant

function winner() {
    if (current1 >= 10) {
        document.getElementById('winner').innerText = "Bravo joueur 1 tu as gagné avec" + current1 + "points";
        disableButtons();
        resetCurrent1();
        resetCurrent2();
        resetScore();
    } else if (current2 >= 10) {
        document.getElementById('winner').innerText = "Bravo joueur 2 tu as gagné avec" + current2 + "points";
        disableButtons();
        resetCurrent1();
        resetCurrent2();
        resetScore();
    } 
}

function newGame() {
    restCurrentPlayer();
    enableButtons();
    resetResult();
    document.getElementById('winner').innerText = "";
}