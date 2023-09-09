class Player {
    constructor(firstName) {
        this.name = firstName; 

    }
    describe() {
        return `${this.name} plays War.`;
    }

}

const player1 = new Player("Jim");
const player2 = new Player("Tom");

console.log(player1); 
console.log(player1.describe()); 


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
    const deck = new Deck();
    deck.createDeck();
    deck.shuffle();
    console.log(deck.cards);

    const hands = deck.deal();
    const player1Hand = hands.player1Hand;
    const player2Hand = hands.player2Hand;

    console.log(`${player1.name}'s Hand`, player1Hand);
    console.log(`${player2.name}'s Hand`, player2Hand);
