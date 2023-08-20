import './addGoblin';
import Goblin from './addGoblin';
import GoblinGame from './goblinGame';

let addGoblin = new Goblin();
let game = new GoblinGame('.game_cell');

game.showScore();
addGoblin.addGoblin();
game.goblinTransference();