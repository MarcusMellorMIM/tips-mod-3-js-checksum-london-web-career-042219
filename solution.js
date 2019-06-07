var data = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]

// Ok, loop through each line, of the array ...
// for each line get the largest and the smallest number - and calculate the difference
// add up the difference returning the checksum 

function getCheckSum( data ) {
  let checkSum = 0
  for ( counter in data ) { 
    checkSum+= Math.max(...data[counter])  -  Math.min(...data[counter])
  }
  return checkSum
}

console.log(getCheckSum(data))