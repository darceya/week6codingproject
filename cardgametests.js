
const expect = chai.expect
const assert = chai.assert

describe('Test 1: Validate each player has 26 cards', () => {
    it ('#Should validate Player 1 and Player2 have 26 cards after each deal', () => {
        const game = new Game();

        game.startGame();

        expect(game.player1.hand.length).to.equal(26);
        expect(game.player2.hand.length).to.equal(26); 
    })



})


