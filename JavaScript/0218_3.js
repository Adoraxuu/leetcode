function squareDigits(num) {
    return parseInt(num.toString().split('').map(digit => parseInt(digit)**2).join(''), 10);
  }

  console.log(squareDigits(9119)) //811181
  console.log(squareDigits(765)) //493625