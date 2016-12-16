function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback){
  var animals = ["kitty", "whale", "cow"];
  animals.forEach(callback)
  return animals;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
