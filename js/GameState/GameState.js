class GameState {
    #state =
    {
        isGameActive: false,
        currentPlayer: null,
    }

    set isGameActive(isActive)
    {
        this.#state.isGameActive = isActive;
    }

    set currentPlayer(player)
    {
        this.#state.currentPlayer = player;
    }

    get isGameActive()
    {
        return this.#state.isGameActive;
    }

    get currentPlayer()
    {
        return this.#state.currentPlayer;
    }

    togglePlayer = () =>
    {
        const newPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.currentPlayer = newPlayer;
    }

}