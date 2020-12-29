const gameState = new GameState();
gameState.isGameActive = true;
gameState.currentPlayer = "X";

const gameBoard = new GameBoard(gameState.isGameActive, gameState.currentPlayer);
gameBoard.init();


