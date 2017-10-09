function Piece (name, value, notation, htmlCode) {
    this.name = name;
    this.value = value;
    this.htmlCode = htmlCode;
    this.move = function() {};
}

function Pawn () {
    Piece.call(this, 'pawn', 1, '', {
        white: '&#9817;',
        black: '&#9823;'
    });
}

function Knight () {
    Piece.call(this, 'knight', 3, 'N', {
        white: '&#9816;',
        black: '&#9822;'
    });
}

function Bishop () {
    Piece.call(this, 'bishop', 3, 'B', {
        white: '&#9815;',
        black: '&#9821;'
    });
}

function Rook () {
    Piece.call(this, 'rook', 5, 'R', {
        white: '&#9814;',
        black: '&#9820;'
    });
}

function Queen () {
    Piece.call(this, 'queen', 9, 'Q', {
        white: '&#9813;',
        black: '&#9819;'
    });
}

function King () {
    Piece.call(this, 'king', 0, 'K', {
        white: '&#9812;',
        black: '&#9818;'
    });
}