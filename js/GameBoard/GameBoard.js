winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

class GameBoard {

    constructor(isGameActive, currentPlayer, togglePlayer)
    {
        this.isGameActive = isGameActive;
        this.currentPlayer = currentPlayer;
        this.togglePlayer = togglePlayer;
    }

    #state = {
        boardState: ["", "", "", "", "", "", "", "", ""]
    }

    init = () =>{
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', this.handleCellClick));
    }


    handleCellClick = (clickedCellEvent) => {
            const clickedCell = clickedCellEvent.target;

            const clickedCellIndex = parseInt(
              clickedCell.getAttribute('data-cell-index')
            );

            if (this.#state.boardState[clickedCellIndex] !== "" || !this.isGameActive) {
                return;
            }
            this.handleCellPlayed(clickedCell, clickedCellIndex);
        }

    handleCellPlayed(clickedCell, clickedCellIndex) {
            this.#state.boardState[clickedCellIndex] = this.currentPlayer;
            clickedCell.innerHTML = this.currentPlayer;
            this.handleResultValidation();
        }


     handleResultValidation() {
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                let a = this.#state.boardState[winCondition[0]];
                let b = this.#state.boardState[winCondition[1]];
                let c = this.#state.boardState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }
            }
        if (roundWon) {
                gameActive = false;
                return;
            }

            let roundDraw = !this.#state.boardState.includes("");
            if (roundDraw) {
                gameActive = false;
                return;
            }

            this.togglePlayer();
        }

    get boardState() {
        return this.#state.boardState;
    }

}