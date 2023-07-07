function telephoneCheck(str) {
  let numbers = {
    1: '555-555-5555',
    2: '(555)555-5555',
    3: '(555) 555-5555',
    4: '555 555 5555',
    5: '5555555555',
    6: '1 555 555 5555',
    7: '1 555-555-5555',
    8: '1(555)555-5555',
    9: '1 (555) 555-5555',
    10: '15555555555',
  }

  let result = '';
  let answer = [];
  let finish;

  str.split('').forEach(element => {
    if(element === '-' || element === '(' || element ===')' || element === ' ') {
      result += element;
    } else if(element === '1' && !result.includes('1')) {
      result += element;
    } else if(/[0-9]/i.test(element)) {
      result += '5';
    }
  })

  Object.keys(numbers).forEach(element => {
    numbers[element] === result ? answer.push(true) : answer.push(false);
  })

  return finish = answer.includes(true) ? true : false;
}

telephoneCheck("1 555-555-5555");
