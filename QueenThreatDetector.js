const generateBoard = (whiteQueen, blackqueen) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackqueen[0]][blackqueen[1]] = 1;
  return board;
}

const vthreat = (location) => {
  let [locationx, locationY] = [location[0], location[1]];
  let threats = [];
  //up
  for (let i = locationx - 1; i >= 0; i--) {
    threats.push([i, locationY]);
  }
  //down
  for (let i = locationx + 1; i < 8; i++) {
    threats.push([i, locationY]);
  }
  return threats;
}

const hthreat = (location) => {
  let [locationx, locationY] = [location[0], location[1]];
  let threats = [];
  //left
  for (let i = locationY- 1; i >= 0; i--){
    threats.push([locationx, i]);
  }
  //right
  for (let i = locationY + 1; i < 8; i++){
    threats.push([locationx, i]);
  }
  return threats;
}

const dthreat = (location) => {
  let [locationx, locationY] = [location[0], location[1]];
  let threats = [];
  //left up
  {
    let xUp = locationx - 1;
    for (let i = locationY - 1; i >= 0; i--) {
      if (xUp >= 0) {
        threats.push([xUp, i]);
        xUp--;
      }
    }

  }
  //right up
  {
    let xUp = locationx - 1;
    for (let i = locationY + 1; i < 8; i++) {
      if (xUp >= 0) {
        threats.push([xUp, i]);
        xUp--;
      }
    }
  }
  //left down
  {
    let yDown = locationY - 1;
    for (let i = locationx + 1; i < 8; i++) {
      if (yDown >= 0) {
        threats.push([i, yDown]);
        yDown--;
      }

    }
  }
  //right down
  {
    let yDown = locationY + 1;
    for (let i = locationx + 1; i < 8; i++) {
      if (yDown <= 8) {
        threats.push([i, yDown]);
        yDown++;
      }
    }
  }
  return threats;
}

const queenThreat = (board) => {
  let conflict = false;
  let wQueenX,wQueenY, threats, wQueenPos, vThreats, hThreats, dThreats,bQueenX, bQueenY, bQueenPos;
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (board[i][j]){
        wQueenX === undefined? [wQueenX, wQueenY] = [i,j] : [bQueenX, bQueenY] = [i,j];
      }
    }
  }
  wQueenPos = [wQueenX, wQueenY];
  bQueenPos = [bQueenX, bQueenY];
  [vThreats, hThreats, dThreats] = [vthreat(wQueenPos), hthreat(wQueenPos),dthreat(wQueenPos)];
  threats = vThreats.concat(hThreats).concat(dThreats);
  threats.forEach((t) => {
    if (t[0] === bQueenPos[0] && t[1] === bQueenPos[1]){
      conflict = true;
    }

  })
  return conflict;

}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));