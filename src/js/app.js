import Goblin from './addGoblin';
import GoblinGame from './goblinGame';

const addGoblin = new Goblin();
const game = new GoblinGame('.game_cell');

game.showScore();
addGoblin.addGoblin();
game.goblinTransference();
