var board = createRectangularBoard(8, 8); 
fillChessBoard(board);

for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
        console.log(board[i][j].code);    
    }
}