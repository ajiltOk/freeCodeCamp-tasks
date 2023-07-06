function convertToRoman(num) {
  let units = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
  }

  let dozens = {
    1: 'X',
    4: 'XL',
    5: 'L',
    9: 'XC',
  }

  let hundreds = {
    1: 'C',
    4: 'CD',
    5: 'D',
    9: 'CM',
  }

  let thousand = 'M'

  let result = '';
  let arr = String(num).split('');
    
  if(arr.length === 1) {
    convert(arr[0], units);
  } else if(arr.length === 2) {
    convert(arr[0], dozens);
    convert(arr[1], units);
  } else if(arr.length === 3) {
    convert(arr[0], hundreds);
    convert(arr[1], dozens);
    convert(arr[2], units);
  } else if(arr.length === 4) {
    result += thousand.repeat(arr[0]);
    convert(arr[1], hundreds);
    convert(arr[2], dozens);
    convert(arr[3], units);
  }

  function convert(number, position) {
    Object.keys(position).forEach(element => {
      if(number === element) {
        result += position[element];
      }
    })
    if(number > 1 && number < 4) {
      result += position[1].repeat(number);
    } else if(number > 5 && number < 9) {
      result += position[5] + position[1].repeat(number - 5);
    }
  }

  return result;
}

convertToRoman(4289);
