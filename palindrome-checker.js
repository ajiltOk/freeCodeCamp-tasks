function palindrome(str) {
  let arr = [];
  let result;
  str.toLowerCase().split('').forEach(element => {
    if(/[a-z0-9]/i.test(element)) {
      arr.push(element);
    }
  })
  
  return result = arr.join('') === arr.reverse().join('') ? true : false;;
}

palindrome("A man, a plan, a canal. Panama");
