/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import AddGoblin from './addGoblin';

export default class GoblinGame {
  constructor(elements) {
    if (typeof elements === 'string') {
      // eslint-disable-next-line no-param-reassign
      elements = document.querySelectorAll(elements);
    }

    this.win = 0;
    this.winScore = document.querySelector('.win_score');
    this.lose = 0;
    this.loseScore = document.querySelector('.lose_score');

    this.addGoblin = new AddGoblin();
    this.goblinClick = this.goblinClick.bind(this);

    // eslint-disable-next-line no-underscore-dangle
    this._elements = elements;

    // eslint-disable-next-line no-underscore-dangle
    this._elements.forEach((element) => element.addEventListener('click', this.goblinClick));
  }

  goblinTransference() {
    setInterval(() => {
      this.addGoblin.changeGoblinPosition();
      this.lose += 1;
      this.showScore();
      this.goblinLose();
    }, 1000);
  }

  goblinClick(e) {
    if (e.currentTarget.hasChildNodes()) {
      this.win += 1;
      this.addGoblin.changeGoblinPosition();
      this.showScore();
      this.goblinWin();
    } else {
      this.lose += 1;
      this.showScore();
      this.goblinLose();
    }
  }

  goblinWin() {
    if (this.win === 5) {
      alert('You Win!');
      location.reload();
    }
  }

  goblinLose() {
    if (this.lose === 5) {
      alert('You Lose!');
      location.reload();
    }
  }

  showScore() {
    this.winScore.textContent = this.win;
    this.loseScore.textContent = this.lose;
  }
}
