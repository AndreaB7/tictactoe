
// SETUP GAME: limpio
function Game() {
  this.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  this.isFull = false;
}

// Prototypes to inputs to the game
// HTML
Game.prototype.generateGrid = function(numberRow, numberColumn){
    console.log("I am in a grid");
    for (row = 0; row < numberRow; row++) {
      for (column = 0; column < numberColumn; column++){
        $('#game').append($('<div>')
                  .attr('data-row', row)
                  .attr('data-col', column)
                  .addClass('cell'));
        console.log("This is a cell");
      }
    }
};


Game.prototype.clickCell = function(){
  console.log("This is a click");

  var row;
  var col;

  // turno para definir los jugadores
  var turn = 1;
  // definimos una variable parar
  var value;

  $(".cell").click(function(){
    //if user 1 + declarar user 1 y user 2
    // HTML

    if (turn === 1){
      value = "X";
      $(this).text("X")
      turn = 2;
    } else if (turn === 2){
      $(this).text("O");
      value = "O";
      turn = 1;
    }

    $(this).addClass('cellX')
    // JS tracks position cells HTML
      row = $(this).attr('data-row')
        console.log(row);
      col = $(this).attr('data-col')
        console.log(col);

    game.board[row][col] = value;
      console.log (game.board);
      game.detectFullBoard();
      game.extractRandomTiles();
      console.log("isFull ?" , game.isFull)
  });
}

Game.prototype.detectFullBoard = function(){
  this.isFull = true;
  for(var i = 0; i < this.board.length; i++){
    for (var j = 0; j< this.board[i].length; j++) {
      if(this.board[i][j] === null){
        this.isFull = false
      }
    }
  }
}

  //
Game.prototype.extractRandomTiles= function(){
  // Generate Random Value
  //var isFull = true;
  if (this.isFull === true){
    console.log("The board is full now");

    // Math radom multiplicado por tres por las tres casillas
    var randomTilePositionX = [];
    var randomTilePositionO = [];

    while (randomTilePositionX.length < 2 || randomTilePositionO.length < 2) {
      var row = Math.floor(Math.random() * 3);
      var col = Math.floor(Math.random() * 3);

      if(this.board[row][col] === "X" && randomTilePositionX.length < 2){
        randomTilePositionX.push([row,col])
      }

      if(this.board[row][col] === "O" && randomTilePositionO.length < 2){
        randomTilePositionO.push([row,col])
      }
    }
  }

//recorrer arrays "randomTilePOsitionX" + coordenadas guardadas e ir a la posición del board para ponerla "null" + acceder al jquery y quitar el .text
console.log(randomTilePositionX);
console.log(randomTilePositionO);


}







// PARTE DE LA APLICACIÓN, VA POR SEPARADO
// DOCUMENT READY

var game;

$(document).ready(function() {

  game = new Game();
  game.generateGrid(3, 3);
  game.clickCell();
});

