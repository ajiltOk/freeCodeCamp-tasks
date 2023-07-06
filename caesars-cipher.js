function rot13(str) {
  let result = '';
  let a = 'A';
  let z = 'Z';
  let alpha = [];

  for(let i = a.charCodeAt(0); i <= z.charCodeAt(0); i++) {
    alpha.push(i + ' ');
  }

  let doubleAlpha = alpha.join('').repeat(2).split(' ');

  for(let i = 0; i < str.length; i++) {
    if(!/[A-Z]/i.test(str[i])) {
      result += str[i];
    } else {
      let index = doubleAlpha.indexOf(String(str.charCodeAt(i)));
      result += String.fromCharCode(doubleAlpha[index + 13]);
    }
  }
  return result;
}

rot13("SERR CVMMN!");
