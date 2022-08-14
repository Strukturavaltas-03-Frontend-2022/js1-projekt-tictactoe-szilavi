<<<<<<< HEAD
const player1 = 'X';
const player2 = 'O';
const boxElements = document.querySelectorAll(".box")
const theWinner = document.querySelector('.winner p')
let circleTurn;
let currentPlayer;
let stepCount = 0
const winner = [
   [0, 1, 2],
   [3, 4 ,5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]


// csak egyszer lehessen klikkelni

boxElements.forEach(box => {
    box.addEventListener('click', handleClick, {once: true})
  })

// function handleClick (e) {
// 	console.log('ide már klikkeltem')
//    }

 // kirakja a markot
=======
/* 
Hozd létre a szükséges változókat, és definiáld is őket:
- matrix: ez egy tömb (alapértelmezetten üres), amely az egész játékteret tartalmazza,
- stepCount: ez egy szám (alapértelmezetten 0), a megtett lépések száma,
- cols: ez az oszlopok száma (alapértelmezetten 3),
- rows: ez a sorok száma (alapértelmezetten 3),
- mark: ez a jel, amellyel játszanak a játékosok (0 vagy X, alapértelmezetten 'X').
*/

const stepCount = 0

const cols = 3

const rows = 3

const mark = 'x'

/*const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]*/

const matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

/**
Fejtsd ki az initState elnevezésű függvényt, 
amely feltölti üres mezőkkel a játékteret, 
tehát az összes sort és oszlopot a mátrixban.
>>>>>>> 2ea626741f9001f546cc710ddcb65aa7aee6a395

 function handleClick (e) {
    const box = e.target;
    currentPlayer = circleTurn ? player2 : player1;
    markTheBox(box, currentPlayer);
    circleTurn = !circleTurn;
    if (checkWin(currentPlayer)) {
        theWinner.textContent = `${currentPlayer} is the winner`
        boxElements.forEach(box => {
            box.removeEventListener('click', handleClick, {once: true})
          })
    } else if (stepCount === 9) {
        theWinner.textContent = "It's a tie"
        boxElements.forEach(box => {
            box.removeEventListener('click', handleClick, {once: true})
          })
    }
 }

 function markTheBox (box, currentPlayer) {
        box.classList.add(currentPlayer)
        stepCount++
 }

 function checkWin(currentPlayer) {
    return winner.some(combo => {
        return combo.every(index => {
            return boxElements[index].classList.contains(currentPlayer)
        })
    })
 }