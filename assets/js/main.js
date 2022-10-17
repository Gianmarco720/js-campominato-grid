/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// seleziono il container e il bottone con queryselector
const container = document.querySelector('.my_container');
const gameBtn = document.querySelector('.start_game');

// creo l'elemento da inserire nella DOM
let cells = `<div class="cell"></div>`;
let cellsNum = 100;

// aggiungo un eventlistener per creare la griglia al click del bottone
gameBtn.addEventListener('click', function() {
    // invoco la funzione per la griglia
    gridGen(100, container);
})

// creo una funzione per generare le griglia
function gridGen(num, domEl) {
    for (let i = 0; i < num; i++) {
        domEl.innerHTML += cells;
    }
}