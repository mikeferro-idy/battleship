export function Ship(length){
    return {
        length: length,
        hits: 0,
        hit: function() {this.hits++},
        isSunk: function() {return (this.hits >= this.length)}       
    }
}

export function Gameboard(){
    let board = initialize(10);
    let ships = []
    let missedShots = []

    const validPlacement = (x, y) => true;

    function initialize (size) {
        return Array(size).fill().map(()=>Array(size).fill())
    }

    const placeShip = (length, x, y) => {
        if (validPlacement){
            ships.push(Ship(length))
            for (let i = x; i <= x + length; ++i){
                board[i][y] = 1;
            }
        }
    } 

    const  receiveAttack = (x,y) => {
        if (!validPlacement) return new Error('Invalid Coordinates');
        if (board[x][y] === battleShip) return true;
        return false;
    }

    const allShipSunk = () => board.includes(battleShip);

    return {board, placeShip}
}