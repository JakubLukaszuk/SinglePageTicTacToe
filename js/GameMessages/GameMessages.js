const MessagesEnum = Object.freeze({"win" : 1, "draw" : 2, "playerTurn" : 3,});

class GameMessages {
    #state = {}

    constructor (placeForMessage)
    {
        this.#state = {
            placeForMessage : placeForMessage,
            winningMessage : (player) => `Player ${player} has won!`,
            drawMessage : () => `Game ended in a draw!`,
            currentPlayerTurn : (player) => `It's ${player}'s turn`,
        }
    }

    showMessage = (messageType, content = "") =>
    {
        switch(messageType)
        {
            case MessagesEnum.win:
                this.#placeForMessage.innerHTML = this.#winningMessage(content);
                break;
            case MessagesEnum.draw:
                this.#placeForMessage.innerHTML = this.#drawMessage();
                break;
            case MessagesEnum.playerTurn:
                this.#placeForMessage.innerHTML = this.#currentPlayerTurn(content);
                break;
            default:
                return;
        }
    }

    get #placeForMessage()
    {
        return this.#state.placeForMessage;
    }

    get #winningMessage()
    {
        return this.#state.winningMessage;
    }

    get #drawMessage()
    {
        return this.#state.drawMessage;
    }

    get #currentPlayerTurn()
    {
        return this.#state.currentPlayerTurn;
    }

}