"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, amountOfFruit, healthCondition, harvested) {
    this._age = age || 0;
    this._height = height || 0;
    this._amountOfFruit = amountOfFruit || 0;
    this._healthCondition = healthCondition || true;
    this._harvested = harvested || 0;
    this._fruitList = [];
    this._maximumAge = 20;
    this._maximumFruit = 50;
    this._goodFruitQuality = 0;
    this._badFruitQuality = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._amountOfFruit;
  }

  get healthStatus() {
    return this._healthCondition;
  }

  get harvested() {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    if (this._age < this._maximumAge) {
      this._height = this._height + Math.floor((Math.random() * 10) + 1);
      return this._healthCondition = true;
    }
    else {
      return this._healthCondition = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let mangoes = Math.floor((Math.random() * 40) + 10);
    let fruitAmount
    if (mangoes > this._maximumFruit) {
      fruitAmount = this._maximumFruit;
    }
    else {
      fruitAmount = mangoes;
    }
    for (let i = 0; i < mangoes; i++) {
      let newMango = new Mango();
      if (newMango._quality === "good") {
        this._goodFruitQuality++;
      }
      else {
        this._badFruitQuality++;
      }
      this._fruitList.push(newMango);
    }
  }

  // Get some fruits
  harvest() {
    this._harvested = `${this._fruitList.length} ${this._goodFruitQuality} good ${this._badFruitQuality} bad`
    this._goodFruitQuality = 0;
    this._badFruitQuality = 0;
    this._fruitList = [];
  }

}

class Mango {
  // Produce a mango
  constructor() {
    if (Math.floor(Math.random()*10) % 2 === 0) {
      this._quality = "good";
    }
    else {
      this._quality = "bad";
    }
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
