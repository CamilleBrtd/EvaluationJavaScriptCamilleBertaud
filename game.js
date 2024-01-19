// Déclaration des variables
let score1 = 0;
let score2 = 0;

// Fonction pour lancer les dés
function rollDice() {
    const result1 = Math.floor(Math.random() *6) + 1;
    const result2 = Math.floor(Math.random() *6) + 1;

    // Affichage des résultats
    document.getElementById('result').innerText = `Joueur 1: ${result1}  Joueur 2: ${result2}`;
    
    score1 += result1;
    score2 += result2;
}

   