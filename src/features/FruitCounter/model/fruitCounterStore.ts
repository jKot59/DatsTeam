import { makeAutoObservable } from "mobx";

class FallenFruit {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseFruitCounter() {
    this.value += 1;
  }
}

export default new FallenFruit();
