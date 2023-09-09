class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.tie = 0;
        this.hand = [];

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
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        this.faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        this.cards = []
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


    deal(){
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
        this.player1 = new Player("Player 1");
        this.player2 = new Player("Player 2");
    }

    startGame() {
        this.deck.createDeck();
        this.deck.shuffle();
        const hands = this.deck.deal();

        this.player1.hand = hands.player1Hand;
        this.player2.hand = hands.player2Hand;

        for (let i = 0; i < this.player1.hand.length; i++) {
            if (this.player1.hand[i].face == this.player2.hand[i].face) {
                this.player1.tie += 1
            } else {
                if (this.player1.hand[i].face > this.player2.hand[i].face) {
                    this.player1.points += 1;
                    
                } else {
                    this.player2.points += 1;
                    
                }
            }
        }

        if (this.player1.points > this.player2.points) {
            console.log('Player 1 wins wih a score of: ' + this.player1.points)
        } else {
            console.log('Player 2 wins with a score of: ' + this.player2.points)
        }

    }

} 

const game = new Game();
game.startGame();


