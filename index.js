console.log('TEST RPPO');

arr = [{
  name: 'a',
  val: 1
}, {
  name: 'b',
  val: 2
}, {
  name: 'c',
  val: 3
}]


console.log(getVal(arr, 'a'));


function getVal(arr, v) {
  for (i=0; i<arr.length;i++) {
    if (arr[i]?.name === v) {
      return arr[i]  
    }
  }  
}
