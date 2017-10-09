var createRectangularBoard = function (rows, columns) {
    var board = new Array(rows);
    for(var i = 0; i < board.length; i++) {
        board[i] = new Array(columns);
    }
    return board;
};

var fillChessBoard = function (board) {
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            board[i][j] = 'x';
        }
    }
    return board;
}