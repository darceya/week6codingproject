
const expect = chai.expect
const assert = chai.assert

describe('Test 1: Validate each player has 26 cards', () => {

    it ('#Should validate Player 1 and Player2 have 26 cards after each deal', () => {
        const game = new Game();

        game.startGame();

        const player1Hand = game.player1.hand;
        const player2Hand = game.player2.hand;

        expect(player1Hand.length).to.equal(26);
        expect(player2Hand.length).to.equal(26); 
    })
})

describe(`Test 2: Validate the deck is being shuffled`, () => {

    it (`#Should shuffle the deck of cards`, () => {
        const originalDeck = new Deck(); 
        const copiedDeck = new Deck();
        copiedDeck.createDeck();

        copiedDeck.shuffle();

        expect(copiedDeck.cards).to.not.deep.equal(originalDeck.cards);
    })

})
    




