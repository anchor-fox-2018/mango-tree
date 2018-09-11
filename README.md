# mango-tree

age = umur, max 22
height = tinggi, max sampe tahun ke 15 (naik max 2 per tahun)
growing = buah yang tahun ini tumbuh dan dipetik oleh 'harvested'
harvested = buah yang tahun ini dipetik
healthStatus = [good, bad] (in integer), split between harvested fruits
ripe = matang, pakenya di class Mango
status = [good, bad]

//RELEASE NOL
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.Mango;
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`);
}

while(mangoTree._age < 10);

//RELEASE 1 (LINE 130 - 245)