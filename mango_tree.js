"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0,
    this._height = 0,
    this._growing = 0,
    this._ripe = 0,
    this._harvested = 0,
    this._statusGood = 0,
    this._statusBad = 0
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._growing;
  }

  get status () {
    return `${this._statusGood} Good Mangos, ${this._statusBad} Bad Mangos.`;
  }

  get harvested () {
    return this._harvested;
  }

  get Mango() {
    return new Mango();
  }

  /////////////////////////////
  // Get current states here //
  /////////////////////////////

  // Grow the tree
  grow () {
    let randomized = Math.random(2);
    this._age += 1;

    if (this._age <= 10) {
      this._height += Number(randomized.toFixed(1));
      this._height = Number(this._height.toFixed(1));
    }

    return this;
  }

  // Produce some mangoes
  produceMangoes () {
    this._growing = Math.ceil(Math.random() * 20);
    return this;
  }

  // Get some fruits
  harvest () {

    this._statusGood = 0;
    this._statusBad = 0;

    let randomizedHarvest = Math.round(Math.random() * 15);
    this._harvested = randomizedHarvest;
    

    //good bad
    for (let i = 0; i < randomizedHarvest; i++) {
      let randomized = Math.round(Math.random());

      if (randomized === 0) {
        this._statusGood += 1;
      }

      else if (randomized === 1) {
        this._statusBad += 1;
      }
    }
    return this;
  }

}

// class Mango extends MangoTree {
//   // Produce a mango
//   constructor () {
//     super();
//     let randomized = Math.ceil(Math.random() * this._ripe);
//     console.log(randomized);
//     this._ripe = this._growing - randomized;
//     this._growing -= randomized;
//   }
// }

// Release 0 Test
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  // mangoTree.Mango;
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age}] Height = ${mangoTree.height} m | Harvested = ${mangoTree.harvested} (${mangoTree._statusGood} Good, ${mangoTree._statusBad} Bad)`);
}

while(mangoTree._age < 20);

// Test
console.log(mangoTree)

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}
