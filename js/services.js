var createRectangularBoard = function (rows, columns) {
    var board = new Array(rows);
    for(var i = 0; i < board.length; i++) {
        board[i] = new Array(columns);
    }
    return board;
};

var fillChessBoard = function (board) {
    for (var i = 0, charCode = 65; i < board.length; i++, charCode++) {
        for (var j = 1; j <= board[i].length; j++) {
            board[i][j-1] = new Square(String.fromCharCode(charCode).toLowerCase() + j);    
        }
    }
    return board;
}