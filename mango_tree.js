"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (mature,height,death) {
    //this._name = _name;
    this._matureAge = mature;
    this._heightAge = height;
    this._deathAge = death;
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
    
    this._healthStatus = true;
    if(this._age < this._deathAge){
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
class AppleTree extends MangoTree{
  constructor(){
    super(4,15,20)
  }
}
class Apple {}

// Release 2
class FruitTree extends MangoTree{
  constructor(){
    super(2,10,15)
  }
}
class Fruit {}

//driver code untuk release 0
    let mangoTree = new MangoTree(3,20,30)
    console.log('The Tree is alive! :smile:')
   do {
      mangoTree.grow();
      mangoTree.produceMangoes();
      mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree.produceMangoes()[0]} good, ${mangoTree.produceMangoes()[1]} bad)`)
   }while (mangoTree.healthStatus != false)
  console.log('The tree has met its end. :sad:')
  let appleTree = new AppleTree()
    console.log('The Tree is alive! :smile:')
   do {
      appleTree.grow();
      appleTree.produceMangoes();
      appleTree.harvest();
      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested} (${appleTree.produceMangoes()[0]} good, ${appleTree.produceMangoes()[1]} bad)`)
   }while (appleTree.healthStatus != false)
  console.log('The tree has met its end. :sad:')
  let fruitTree = new FruitTree()
    console.log('The Tree is alive! :smile:')
   do {
      fruitTree.grow();
      fruitTree.produceMangoes();
      fruitTree.harvest();
      console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvested} (${fruitTree.produceMangoes()[0]} good, ${fruitTree.produceMangoes()[1]} bad)`)
   }while (fruitTree.healthStatus != false)
  console.log('The tree has met its end. :sad:')
  //console.log(appleTree)