class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.player1 = "x";
        this.player2 = "o";
        this.currentPlayer = this.player1;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex >= 0 && rowIndex < 3 && columnIndex >= 0 && columnIndex < 3 && this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            (this.currentPlayer === this.player1) ? (this.currentPlayer = this.player2) : (this.currentPlayer = this.player1);
        }

    }

    isFinished() {
        if (this.getWinner() !== null || this.noMoreTurns() === true) {
            return true;
        }
        return false;
    }

    getWinner() {
        let winner = null;

        (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]) ? winner = this.matrix[0][0] :
            (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2]) ? winner = this.matrix[1][0] :
                (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2]) ? winner = this.matrix[2][0] :

                    (this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0]) ? winner = this.matrix[0][0] :
                        (this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1]) ? winner = this.matrix[0][1] :
                            (this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2]) ? winner = this.matrix[0][2] :

                                (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) ? winner = this.matrix[0][0] :
                                    (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) ? winner = this.matrix[0][2] : winner;

        return winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < 3; k++) {
                if (this.matrix[i][k] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.isFinished() === false || this.getWinner() !== null) {
            return false;
        } else return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
