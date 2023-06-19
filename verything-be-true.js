//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
  let result = [];
  collection.forEach(element => {
    if(element[pre]) {
      result.push(true);
    } else {
      result.push(false);
    }
  })
  
  if(result.includes(false)) {
    return false;
  } else {
    return true;
  }
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
