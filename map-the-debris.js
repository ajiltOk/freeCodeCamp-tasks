// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
  let avgAltArr = [];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  arr.forEach(element => {
    avgAltArr.push(element.avgAlt);
    delete element.avgAlt;
  })
  
  for(let i = 0; i < avgAltArr.length; i++) {
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAltArr[i]), 3) / GM));
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
