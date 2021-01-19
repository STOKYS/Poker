const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.globalCompositeOperation = "source-over";

let game = "";

document.getElementById("newGame").addEventListener("click", function(){
    game = new Game(document.getElementById("moneyStart").value)
    update()
})

const background = new Image()
background.src = "img/background.png"

// All the cards
const clubs_card02 = new Image()
clubs_card02.src = "img/clubs/card02.png"
const clubs_card03 = new Image()
clubs_card03.src = "img/clubs/card03.png"
const clubs_card04 = new Image()
clubs_card04.src = "img/clubs/card04.png"
const clubs_card05 = new Image()
clubs_card05.src = "img/clubs/card05.png"
const clubs_card06 = new Image()
clubs_card06.src = "img/clubs/card06.png"
const clubs_card07 = new Image()
clubs_card07.src = "img/clubs/card07.png"
const clubs_card08 = new Image()
clubs_card08.src = "img/clubs/card08.png"
const clubs_card09 = new Image()
clubs_card09.src = "img/clubs/card09.png"
const clubs_card10 = new Image()
clubs_card10.src = "img/clubs/card10.png"
const clubs_card11 = new Image()
clubs_card11.src = "img/clubs/card11.png"
const clubs_card12 = new Image()
clubs_card12.src = "img/clubs/card12.png"
const clubs_card13 = new Image()
clubs_card13.src = "img/clubs/card13.png"
const clubs_card14 = new Image()
clubs_card14.src = "img/clubs/card14.png"

const diamonds_card02 = new Image()
diamonds_card02.src = "img/diamonds/card02.png"
const diamonds_card03 = new Image()
diamonds_card03.src = "img/diamonds/card03.png"
const diamonds_card04 = new Image()
diamonds_card04.src = "img/diamonds/card04.png"
const diamonds_card05 = new Image()
diamonds_card05.src = "img/diamonds/card05.png"
const diamonds_card06 = new Image()
diamonds_card06.src = "img/diamonds/card06.png"
const diamonds_card07 = new Image()
diamonds_card07.src = "img/diamonds/card07.png"
const diamonds_card08 = new Image()
diamonds_card08.src = "img/diamonds/card08.png"
const diamonds_card09 = new Image()
diamonds_card09.src = "img/diamonds/card09.png"
const diamonds_card10 = new Image()
diamonds_card10.src = "img/diamonds/card10.png"
const diamonds_card11 = new Image()
diamonds_card11.src = "img/diamonds/card11.png"
const diamonds_card12 = new Image()
diamonds_card12.src = "img/diamonds/card12.png"
const diamonds_card13 = new Image()
diamonds_card13.src = "img/diamonds/card13.png"
const diamonds_card14 = new Image()
diamonds_card14.src = "img/diamonds/card14.png"

const hearts_card02 = new Image()
hearts_card02.src = "img/hearts/card02.png"
const hearts_card03 = new Image()
hearts_card03.src = "img/hearts/card03.png"
const hearts_card04 = new Image()
hearts_card04.src = "img/hearts/card04.png"
const hearts_card05 = new Image()
hearts_card05.src = "img/hearts/card05.png"
const hearts_card06 = new Image()
hearts_card06.src = "img/hearts/card06.png"
const hearts_card07 = new Image()
hearts_card07.src = "img/hearts/card07.png"
const hearts_card08 = new Image()
hearts_card08.src = "img/hearts/card08.png"
const hearts_card09 = new Image()
hearts_card09.src = "img/hearts/card09.png"
const hearts_card10 = new Image()
hearts_card10.src = "img/hearts/card10.png"
const hearts_card11 = new Image()
hearts_card11.src = "img/hearts/card11.png"
const hearts_card12 = new Image()
hearts_card12.src = "img/hearts/card12.png"
const hearts_card13 = new Image()
hearts_card13.src = "img/hearts/card13.png"
const hearts_card14 = new Image()
hearts_card14.src = "img/hearts/card14.png"

const spades_card02 = new Image()
spades_card02.src = "img/spades/card02.png"
const spades_card03 = new Image()
spades_card03.src = "img/spades/card03.png"
const spades_card04 = new Image()
spades_card04.src = "img/spades/card04.png"
const spades_card05 = new Image()
spades_card05.src = "img/spades/card05.png"
const spades_card06 = new Image()
spades_card06.src = "img/spades/card06.png"
const spades_card07 = new Image()
spades_card07.src = "img/spades/card07.png"
const spades_card08 = new Image()
spades_card08.src = "img/spades/card08.png"
const spades_card09 = new Image()
spades_card09.src = "img/spades/card09.png"
const spades_card10 = new Image()
spades_card10.src = "img/spades/card10.png"
const spades_card11 = new Image()
spades_card11.src = "img/spades/card11.png"
const spades_card12 = new Image()
spades_card12.src = "img/spades/card12.png"
const spades_card13 = new Image()
spades_card13.src = "img/spades/card13.png"
const spades_card14 = new Image()
spades_card14.src = "img/spades/card14.png"

document.getElementById("fgfdasf").addEventListener("click", function(){
    game.turn()
})