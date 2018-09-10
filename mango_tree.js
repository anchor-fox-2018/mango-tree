"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (umur, tinggi, jenisBuah, jumlahBuah, status) {
    this._age = umur || 0;
    this._height = tinggi || 0;
    this._fruitName = jenisBuah || 'Mango';
    this._harvested = jumlahBuah || 0;
    this._healthStatus = status || true;
    this._fruits = [];
    this._maxAge = 20;
    this._maxFruit = 50;
    this.goodQuality = 0;
    this.badQuality = 0;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitName;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++;
    if (this._age < this._maxAge) {
      this._height += Math.round(Math.random() * 10 + 1);
      return this._healthStatus = true;
    } else {
      return this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let buahMangga = Math.round(Math.random() * 40 + 10);
    let totalBuah = (buahMangga > this._maxFruit) ? this._maxFruit : buahMangga;
    for (var i = 0; i < totalBuah; i++) {
      let mango = new Mango();
      if (mango.quality === 'Good') {
        this.goodQuality++;
      } else {
        this.badQuality++;
      }
      this._fruits.push(mango);
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = ` ${this._fruits.length} (${this.goodQuality} good, ${this.badQuality} bad)`;
    this.goodQuality = 0;
    this.badQuality = 0
    this._fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.random() % 2 === 0 ? 'Good': 'Bad';
  }

  random() {
    return Math.round(Math.random() * 10)
  }
}

//driver code untuk release 0
let mangoTree = new MangoTree();

console.log('The tree is alive! :smile:');
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  }
while (mangoTree.healthStatus != false);
console.log('The tree has met its end. :sad:');


// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
