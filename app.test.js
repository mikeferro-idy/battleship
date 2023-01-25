import {Gameboard, Ship} from './app'

it('create ship', () => {
    let battleship = Ship(1);
    expect(Ship(1)).toBeDefined();
})

it('hit ship', () => {
    let battleship = Ship(1)
    battleship.hit();
    expect(battleship.hits).toBe(1)
})

it('isSunk()', () => {
    let battleship = Ship(1)
    battleship.hit();
    expect(battleship.isSunk()).toBeTruthy()   
})

describe('Gameboard', () => {
    it('Initizalize gameboard & test legnth is 10 x 10',()=> {
        let testBoard = Gameboard()
        expect(testBoard.board.length).toBe(10);
        expect(testBoard.board[1].length).toBe(10);
    })
    it('Place ship', () => {
       
    })
})



