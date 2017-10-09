var createRectangularBoard = function (rows, columns) {
    var board = new Array(rows);
    for(var i = 0; i < board.length; i++) {
        board[i] = new Array(columns);
    }
    return board;
};

var fillChessBoard = function (board) {
    for (var i = 1; i <= board.length; i++) {
        for (var j = 0, charCode = 65; j < board[i-1].length; j++, charCode++) {
            board[i-1][j] = new Square(String.fromCharCode(charCode).toLowerCase() + i);   
            if((charCode + i)%2 === 0) {
                board[i-1][j].color = "dark";
            } else {
                board[i-1][j].color = "light";
            }
            if(i===2 || i===7) board[i-1][j].piece = new Pawn();
            if(i===1 || i===8) {
                if(charCode === 65 || charCode === 72) board[i-1][j].piece = new Rook();
                if(charCode === 66 || charCode === 71) board[i-1][j].piece = new Knight();
                if(charCode === 67 || charCode === 70) board[i-1][j].piece = new Bishop();
                if(charCode === 68) board[i-1][j].piece = new Queen();
                if(charCode === 69) board[i-1][j].piece = new King();
            }
            if(i===7 || i===8) {
                board[i-1][j].piece.color = 'black';
            }
            if(i===1 || i===2) {
                board[i-1][j].piece.color = 'white';
            }
        }
    }
    console.log(board);
    return board;
}

var renderBoard = function (board) {
    var table = document.createElement('table');
    for (var i = board.length-1; i >= 0; i--) {
        var row = document.createElement('tr');
        for (var j = 0; j < board[i].length; j++) {
              var cell = document.createElement('td');
              cell.classList = 'square';
              cell.setAttribute('id', board[i][j].code);
              if(board[i][j].color === 'light') {
                cell.classList += ' ' + 'light-square';
              } else {
                cell.classList += ' ' + 'dark-square';
              }
              row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

var renderPieces = function (board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {         
            if(board[i][j].piece) {
                if(board[i][j].piece.color === "white") {
                    document.getElementById(board[i][j].code).innerHTML = board[i][j].piece.htmlCode['white'];
                } else {
                    document.getElementById(board[i][j].code).innerHTML = board[i][j].piece.htmlCode['black'];
                }
            } 
        }
    }
}