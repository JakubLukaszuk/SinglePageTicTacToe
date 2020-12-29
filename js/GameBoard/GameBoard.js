class GameBoard {

    constructor(isGameActive, currentPlayer)
    {
        this.isGameActive = isGameActive;
        this.currentPlayer = currentPlayer;
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
            debugger
            gameState[clickedCellIndex] = this.currentPlayer;
            clickedCell.innerHTML = this.currentPlayer;
        }

    get boardState() {
        return this.#state.boardState;
    }

}