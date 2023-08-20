/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
export default class AddGoblin {
  constructor() {
    this.gameCells = document.querySelectorAll('.game_cell');
    this.goblin = './assets/img/goblin.png';
  }

  addGoblin() {
    let randomNumber = Math.floor(Math.random() * this.gameCells.length);

    let img = document.createElement('img');
    img.src = this.goblin;

    this.gameCells[randomNumber].append(img);
  }

  removeGoblin() {
    let img = document.querySelector('img');
    img.remove();
  }

  changeGoblinPosition() {
    this.removeGoblin();
    this.addGoblin();
  }
}
