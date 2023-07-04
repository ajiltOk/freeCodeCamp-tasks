function whatIsInAName(collection, source) {
  let result = [];
  for(let i = 0; i < collection.length; i++) {
    if(Object.keys(collection[i]).length >= Object.keys(source).length) {
      let arr = [];
      Object.keys(collection[i]).forEach(element => {
        Object.keys(source).forEach(elem => {
          if(element == elem) {
            if(collection[i][element] == source[element]) {
              arr.push(true);
            }
          }
        })
      })
      if(arr.length == Object.keys(source).length) {
        result.push(collection[i]);
      }
    }
  }
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
