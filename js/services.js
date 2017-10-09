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
            if((charCode + j)%2 === 0) {
                board[i][j-1].color = "dark";
            } else {
                board[i][j-1].color = "light";
            }
            if(j===2 || j===7) board[i][j-1].piece = new Pawn();
            if(j===1 || j===8) {
                if(charCode === 65 || charCode === 72) board[i][j-1].piece = new Rook();
                if(charCode === 66 || charCode === 71) board[i][j-1].piece = new Knight();
                if(charCode === 67 || charCode === 70) board[i][j-1].piece = new Bishop();
                if(charCode === 68) board[i][j-1].piece = new Queen();
                if(charCode === 69) board[i][j-1].piece = new King();
            }
        }
    }
    return board;
}