let messageEl = document.getElementById("message-el")
let message = ""
let cards = []
let dealerCards = []
let sum = 0
let dealerSum = 0
let sumEl = document.getElementById("soma-el")
let dealerSumEl = document.getElementById("dealerSum-el")
let cardsEl = document.getElementById("cards-el")
let dealerCardsEl = document.getElementById("dealerCards-el")
let isAlive = false
let blackjack = false
let player = {
    name: "Artur",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function start() {
    dealerSum = ""
    dealerSumEl.textContent = "Soma: " + dealerSum
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    let dealerCard1 = getRandomCard()
    let dealerCard2 = getRandomCard()
    cards = [card1, card2]
    dealerCards = [dealerCard1, dealerCard2]
    sum = card1 + card2
    dealerSum = dealerCard1 + dealerCard2
    render()
    isAlive = true
    blackjack = false
}

function render() {
    dealerCardsEl.textContent = "Cartas do dealer: " + "X" + " " +  dealerCards[0]
    if (sum < 21){
        message = "Quer comprar uma carta?"
    } else if (sum === 21){
        message = "Você fez um Blackjack!"
        blackjack = true
        dealerCardsEl.textContent = "Cartas do dealer: " + dealerCards[1] + " " +  dealerCards[0]
        dealerSumEl.textContent = "Soma: " + dealerSum
    } else {
        message = "Você perdeu!"
        isAlive = false
        dealerCardsEl.textContent = "Cartas do dealer: " + dealerCards[1] + " " +  dealerCards[0]
        dealerSumEl.textContent = "Soma: " + dealerSum
    }
    cardsEl.textContent = "Suas cartas: "
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

function stop() {
    if (isAlive === true && sum === dealerSum && sum < 22) {
        isAlive = false
        message = "Empate"
    } else if (isAlive === true && dealerSum > sum && sum < 22){
        isAlive = false
        message = "Você perdeu :("
    } else if (isAlive === true && sum > dealerSum && sum < 22) {
        message = "Você ganhou!!!!"
    }
    dealerCardsEl.textContent = "Cartas do dealer: " + dealerCards[1] + " " +  dealerCards[0]
    dealerSumEl.textContent = "Soma: " + dealerSum
    messageEl.textContent = message

}


