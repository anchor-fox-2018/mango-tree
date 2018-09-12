"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvest = ''
    this._health_status = true
    this._good_fruit = 0
    this._bad_fruit = 0
  }

  get age () {
    return this._age
  }

  set age(value){
    this._age += value;
  }

  get height () {
    return this._height
  }

  set height (increase){
    this._height += increase;
  }

  get fruits () {
    return this._fruits.length;
  }

  set fruits(fruit){
    this._fruits.push(fruit);
  }

  get healthStatus(){
    return this._health_status;
  }

  set healthStatus (boolean) {
    this._health_status = boolean;
  }

  get harvested () {
    return this._harvest
  }

  set harvested (input){
    this._harvest = `${this.good_fruit + this.bad_fruit} (${this.good_fruit} good, ${this.bad_fruit} bad)`;
  }

  // Get current states here

  // Grow the tree
  grow () {
    let matureAge = 20;
    let maxHeight = 4.8 ;

    
    if(this._age < matureAge){
      this.age = 1
      if (this._height < maxHeight){
        this.height = Math.round(Math.random()*10)/10;
      }
    } else {
      this.healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let random = Math.floor(Math.random() * (10-1)+1)
    // console.log(random);
    let good = 0
    let bad = 0
    for(let i = 0; i < random ; i++){
      let mango = new Mango;
      if(mango._quality === 'good'){
        good++
      } else if(mango._quality === 'bad'){
        bad++
      }
      this.good_fruit = good;
      this.bad_fruit = bad;
      this.fruits = mango;
    }
    return this._fruits;
  }

  get good_fruit(){
    return this._good_fruit
  }
  
  set good_fruit(jumlah){
    this._good_fruit = jumlah
  }

  get bad_fruit(){
    return this._bad_fruit
  }

  set bad_fruit(jumlah){
    this._bad_fruit = jumlah
  }

  // Get some fruits
  harvest() {
    this.harvested = this._fruits;
    // return this._harvest;
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this._quality = ['good', 'bad'][Math.floor(Math.random() * 2)]
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
  // mangoTree.grow()
  // mangoTree.produceMangoes(new Mango)
  // mangoTree.harvest()
  // console.log(mangoTree.produceMangoes());

  // console.log(mangoTree.age);
  // console.log(mangoTree.height = Math.round(Math.random()*10)/10);


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
