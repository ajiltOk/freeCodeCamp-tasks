//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
  let arr = [];
  collection.forEach(element => {
    element[pre] ? arr.push(true) : arr.push(false);
  })
  
  return result = arr.includes(false) ? false : true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
