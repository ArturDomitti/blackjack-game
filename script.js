let messageEl = document.getElementById("message-el")
let message = ""
let cards = []
let sum = 0
let sumEl = document.getElementById("soma-el")
let cardsEl = document.getElementById("cards-el")
let isAlive = false
let blackjack = false
let player = {
    name: "Artur",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function start() {
    render()
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2
    render()
    isAlive = true
    blackjack = false
}

function render() {
    if (sum < 21){
        message = "Quer comprar uma carta?"
    } else if (sum === 21){
        message = "Você fez um Blackjack!"
        blackjack = true
    } else {
        message = "Você está fora"
        isAlive = false
    }
    cardsEl.textContent = "Cartas: "
    for (c = 0; c < cards.length; c++){
        cardsEl.textContent += cards[c] + " "
    }
    sumEl.textContent = "Soma: " + sum
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && blackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        render()
    }
}

function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13 ) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}


