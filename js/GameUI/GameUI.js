class GameUI {
    constructor(resetGameState, resetGameBoard, displayCurrentPlayerTurn)
    {
        this.resetGameState = resetGameState,
        this.resetGameBoard = resetGameBoard,
        this.displayCurrentPlayerTurn = displayCurrentPlayerTurn
    }

    init = () =>{
        document.querySelector('.game--restart').addEventListener('click', this.#handleRestartGame);
    }

    #handleRestartGame = () => {
        debugger
        this.resetGameState();
        this.resetGameBoard();
        this.displayCurrentPlayerTurn();
    }

}