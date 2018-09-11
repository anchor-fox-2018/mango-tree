"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    //this._name = _name;
    this._age = 0;
    this._height = 3;
    this._quality = this.produceMangoes();
    this._buah = 0;
  }
  
  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this.age*this._buah
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._buah
  }

  // Get current states here

  // Grow the tree
  grow () {
    let acak = Math.random();
    let buahPerTahun = Math.floor(Math.random()*(10-1)+1)
    this._matureAge = 3;
    this._heightAge = 10;
    this._deathAge = 21;
    //this._healthStatus = true;
    if(this._age <= this._deathAge){
      this._age++
      if(this._age >= this._matureAge){
        this._buah+= buahPerTahun
      }
      if(this._age <= this._heightAge){
        this._height+=acak;
      }
    }else{
      this._healthStatus = false;
    }
    return this 
  }

  // Produce some mangoes
  produceMangoes () {
    let acakGood = Math.floor(Math.random()*10);
    let acakBad = Math.floor(Math.random()*10);
    return [acakGood,acakBad]  
  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {
  }
}

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
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

//driver code untuk release 0
    let mangoTree = new MangoTree()
    console.log('The Tree is alive! :smile:')
   do {
      mangoTree.grow();
      mangoTree.produceMangoes();
      mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree.produceMangoes()[0]} good, ${mangoTree.produceMangoes()[1]} bad)`)
   }while (mangoTree.healthStatus != false)
  console.log('The tree has met its end. :sad:')