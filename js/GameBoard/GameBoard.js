class GameBoard {

    constructor(gameState, displayMessage)
    {
        this.gameState = gameState;
        this.displayMessage = displayMessage;
    }

    #winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    #state =
    {
        boardState: ["", "", "", "", "", "", "", "", ""]
    }

    init = () =>
    {
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', this.handleCellClick));
    }


    handleCellClick = (clickedCellEvent) =>
    {
        const clickedCell = clickedCellEvent.target;

        const clickedCellIndex = parseInt(
            clickedCell.getAttribute('data-cell-index')
        );

        if (this.#state.boardState[clickedCellIndex] !== "" || !this.gameState.isGameActive) {
            return;
        }
        this.handleCellPlayed(clickedCell, clickedCellIndex);
    }

    handleCellPlayed = (clickedCell, clickedCellIndex) =>
    {
        this.#state.boardState[clickedCellIndex] = this.gameState.currentPlayer;
        clickedCell.innerHTML = this.gameState.currentPlayer;
        this.handleResultValidation();
    }


     handleResultValidation = () =>
     {
        let roundWon = false;
        for (let i = 0; i <= 7; i++)
        {
            const winCondition = this.#winningConditions[i];
            let a = this.#state.boardState[winCondition[0]];
            let b = this.#state.boardState[winCondition[1]];
            let c = this.#state.boardState[winCondition[2]];
            if (a === '' || b === '' || c === '')
            {
                continue;
            }
            if (a === b && b === c)
            {
                roundWon = true;
                break
            }
        }
        if (roundWon)
        {
            this.displayMessage(MessagesEnum.win, this.gameState.currentPlayer);
            this.gameStateisGameActive = false;
            return;
        }

        let roundDraw = !this.#state.boardState.includes("");
        if (roundDraw)
        {
            this.displayMessage(MessagesEnum.draw);
            this.gameState.isGameActive = false;
            return;
        }
            this.gameState.togglePlayer();
            this.displayMessage(MessagesEnum.playerTurn, this.gameState.currentPlayer);
    }

    get boardState()
    {
        return this.#state.boardState;
    }

}