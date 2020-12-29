class Game {
    constructor()
    {
        this.gameState = new GameState();
        this.gameState.isGameActive = true;
        this.gameState.currentPlayer = "X";
        this.gameStatus =  document.querySelector('.game--status');
        this.gameMessages = new GameMessages(this.gameStatus);
        this.gameBoard = new GameBoard(this.gameState, this.gameMessages.showMessage);
        this.init();
    }

    init = () =>
    {
        this.gameMessages.showMessage(MessagesEnum.playerTurn, this.gameState.currentPlayer);
        this.gameBoard.init();
    }

}

const game = new Game();
game.init();



