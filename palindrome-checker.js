function palindrome(str) {
  let arr = [];
  let result;
  str.toLowerCase().split('').forEach(element => {
    if(/[a-z0-9]/i.test(element)) {
      arr.push(element);
    }
  })
  
  arr.join('') === arr.reverse().join('') ? result = true : result = false;
  return result;
}

palindrome("A man, a plan, a canal. Panama");
