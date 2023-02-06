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