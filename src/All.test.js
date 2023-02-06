import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";

describe("ship", () => {
  test("ship should return array as long as length", () => {
    const length = 3;
    const admiral = new Ship(length);
    expect(admiral.getShipLength()).toBe(3);
  });
  test("ship should have an array of objects with hit property", () => {
    const admiral = new Ship(2);
    const object = [{ hit: false }, { hit: false }];
    expect(admiral.getShip()).toEqual(object);
  });
  test("ship should be hittable", () => {
    const admiral = new Ship(3);
    admiral.hit(1);
    expect(admiral.getShip()[1]).toEqual({ hit: true });
  });
  test("ship should be sinkable", () => {
    const admiral = new Ship(1);
    admiral.hit(0);
    expect(admiral.isSunk()).toBe(true);
  });
  test("gameboard returns 2d array", () => {
    const board = new GameBoard();
    expect(board.getGameBoard().length).toBe(10);
    expect(board.getGameBoard()[0].length).toBe(10);

  });
});