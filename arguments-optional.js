function addTogether() {
  let first = arguments[0];
  let second = arguments[1];

  if (typeof (first) == 'number') {
    if (arguments.length == 1) return addSecond;
    if (arguments.length == 2) return addSecond(second);
  }
  
  function addSecond(second) {
    if (typeof (second) == 'number') return first + second;
  }
}
addTogether(5)(7);
