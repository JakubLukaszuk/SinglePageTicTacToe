class Game {
    constructor()
    {
        this.gameState = new GameState();
        this.gameState.isGameActive = true;
        this.gameState.currentPlayer = "X";
        this.gameStatus =  document.querySelector('.game--status');
        this.gameMessages = new GameMessages(this.gameStatus);
        this.gameBoard = new GameBoard(this.gameState, this.gameMessages.showMessage);
        this.gameUI = new GameUI(this.gameState.restartGameState, this.gameBoard.restartBoard, this.#displayCurrentPlayerTurn);
        this.init();
    }

    init = () =>
    {
        this.#displayCurrentPlayerTurn();
        this.gameBoard.init();
        this.gameUI.init();
    }

    #displayCurrentPlayerTurn = () =>{
        this.gameMessages.showMessage(MessagesEnum.playerTurn, this.gameState.currentPlayer);
    }

}

const game = new Game();
game.init();



