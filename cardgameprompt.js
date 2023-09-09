class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.tie = 0;
    }
}

class Card {
    constructor(suit, face) {
        this.suit = suit;
        this.face = face;
    }
}

class Deck {
    constructor() {
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        this.faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.cards = [];
    }

    createDeck() {
        for (const suit of this.suits) {
            for (const face of this.faces) {
                this.cards.push(new Card(suit, face));
            }
        }
        return this.cards;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        const player1Hand = [];
        const player2Hand = [];

        while (this.cards.length > 0) {
            player1Hand.push(this.cards.pop());
            player2Hand.push(this.cards.pop());
        }
        return { player1Hand, player2Hand };
    }
}

class Game {
    constructor() {
        this.deck = new Deck();
        this.player1 = null;
        this.player2 = null;
    }

    startGame() {
        this.getPlayerNames();
    }

    getPlayerNames() {
        const player1Name = prompt("Enter Player 1's name:");
        const player2Name = prompt("Enter Player 2's name:");

        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);

        this.deck.createDeck();
        this.deck.shuffle();
        const hands = this.deck.deal();

        const player1Hand = hands.player1Hand;
        const player2Hand = hands.player2Hand;

        for (let i = 0; i < player1Hand.length; i++) {
            if (player1Hand[i].face == player2Hand[i].face) {
                this.player1.tie += 1;
            } else {
                if (player1Hand[i].face > player2Hand[i].face) {
                    this.player1.points += 1;
                } else {
                    this.player2.points += 1;
                }
            }
        }

        this.displayWinner();
    }

    displayWinner() {
        if (this.player1.points > this.player2.points) {
            alert(`${this.player1.name} wins with a score of: ${this.player1.points}`);
        } else if (this.player1.points < this.player2.points) {
            alert(`${this.player2.name} wins with a score of: ${this.player2.points}`);
        } else {
            alert("It's a tie!");
        }
    }
}

const game = new Game();
game.startGame();