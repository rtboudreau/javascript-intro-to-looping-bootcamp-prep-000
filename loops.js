
function forLoop(array) {
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}


function whileLoop(n = 50){
  while(n > 0)
  {console.log(n--)}
  return "done"
}

function doWhileLoop(array) {
  var i = 0

  function incrementVariable() {
    i = i + 1;
  }

  do {
    array.splice(i,1)
  } while( array.length > 0 && incrementVariable()) 
  return array
}