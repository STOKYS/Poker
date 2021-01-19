class Game {
    constructor(money) {
        this.game_started = true
        // Všechny možné karty v balíčku, rozdělené na arraye
        this.available = [
            [
                //clubs
                "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09", "card10", "card11", "card12", "card13", "card14"
            ],
            [
                // diamonds
                "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09", "card10", "card11", "card12", "card13", "card14"
            ],
            [
                // hearts
                "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09", "card10", "card11", "card12", "card13", "card14"
            ],
            [
                // spades
                "card02", "card03", "card04", "card05", "card06", "card07", "card08", "card09", "card10", "card11", "card12", "card13", "card14"
            ]
        ]
        this.symbols = ["clubs", "diamonds", "hearts", "spades"]
        // Začínající peníze
        this.money = money
        // Vytvoří hráče (Jeden jsi ty + 3 AI)
        this.players = [new Player(this.cards(2), this.money), new AI(this.cards(2), this.money, 1), new AI(this.cards(2), this.money, 2), new AI(this.cards(2), this.money, 3)]
        this.mid = new Mid(this.cards(3))
        this.call = 0;
        this.pot = 0;
        this.round = 0;
    }
    // Funkce přiloží karty všem hráčům na začítku hry
    cards(how) {
        let cards = []
        for (let i = 0; i < how; i++) {
            let symbol = Math.floor(Math.random() * 4)
            let card = Math.floor(Math.random() * this.available[symbol].length)
            cards.push([this.available[symbol][card], this.symbols[symbol]])
            this.available[symbol].splice(card, 1)
        }
        console.log(this.available)
        console.log(cards)
        return cards
    }
    redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        this.players.forEach(function (obj) {
            obj.update()
        })
        this.mid.update()
    }
    turn() {
        this.mid.calc()
        this.players.forEach(function (obj, index) {
            if (index != 0) {
                obj.calc()
            }
        })
    }
}

// Hráč
class Player {
    constructor(cards, money) {
        this.cards = cards
        this.money = money
        this.player = 0
    }
    update() {
        for (let i = 0; i < 2; i++) {
            let card = `${this.cards[i][1]}_${this.cards[i][0]}`
            ctx.drawImage(eval(card), ((canvas.width / 2) - 120) + (i * 120), canvas.height - 150, 120, 150)
        }
        document.getElementById("player0_money").innerText = `Money: \$${this.money}`
    }
}

// AI
class AI {
    constructor(cards, money, player) {
        this.cards = cards
        this.money = money
        this.player = player
    }
    update() {
        if (this.player == 1) {
            for (let i = 0; i < 2; i++) {
                let card = `${this.cards[i][1]}_${this.cards[i][0]}`
                ctx.drawImage(eval(card), 0 + (i * 60), canvas.height / 2 - 75, 120, 150)
            }
        } else if (this.player == 2) {
            for (let i = 0; i < 2; i++) {
                let card = `${this.cards[i][1]}_${this.cards[i][0]}`
                ctx.drawImage(eval(card), ((canvas.width / 2) - 120) + (i * 120), 0, 120, 150)
            }
        } else {
            for (let i = 0; i < 2; i++) {
                let card = `${this.cards[i][1]}_${this.cards[i][0]}`
                ctx.drawImage(eval(card), canvas.width - 120 - (i * 60), canvas.height / 2 - 75, 120, 150)
            }
        }
        document.getElementById(`player${this.player}_money`).innerText = `Money: \$${this.money}`
    }
    calc() {
        let match = this.matches()
        if (game.round == 0) {

        } else if (game.round == 1) {

        } else if (game.round == 2) {

        } else {

        }
    }
    matches() {
        if (game.round > 0) {

        } else {
            if (this.cards[0][0] == this.cards[1][0] || this.cards[0][1] == this.cards[1][1] ||
                this.cards[0][0].slice(-2) == this.cards[1][0].slice(-2) || Number(this.cards[0][0].slice(-2)) >= 8 ||
                Number(this.cards[1][0].slice(-2)) >= 8) {
                console.log("100%")
            } else {
                console.log("90%")
            }
        }
    }
}

class Mid {
    constructor(cards) {
        this.cards = cards
        this.results = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0"]["0","0","0","0"]]
    }
    update() {
        for (let i = 0; i < this.cards.length; i++) {
            let card = `${this.cards[i][1]}_${this.cards[i][0]}`
            ctx.drawImage(eval(card), (canvas.width / 2) - 300 + (i * 120), (canvas.height / 2) - 75, 120, 150)
        }
    }
    calc(){
        console.log(this)
        let temp = this
        this.cards.forEach(function(obj){
            let i = (Number(obj[0].slice(-2)) - 1)
            console.log(i)
            console.log(temp)
            console.log(temp.results)
            console.log(temp.results[0])
            console.log(temp.results[0][i])
            temp.results[0][i] += 1
            console.log(temp.results)
        })
    }
}