const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a single-digit number: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number) || number < 0 || number > 9) {
    console.log('Invalid input. Please enter a valid single-digit number.');
  } else {
    let word;

    switch (number) {
      case 0:
        word = 'Zero';
        break;
      case 1:
        word = 'One';
        break;
      case 2:
        word = 'Two';
        break;
      case 3:
        word = 'Three';
        break;
      case 4:
        word = 'Four';
        break;
      case 5:
        word = 'Five';
        break;
      case 6:
        word = 'Six';
        break;
      case 7:
        word = 'Seven';
        break;
      case 8:
        word = 'Eight';
        break;
      case 9:
        word = 'Nine';
        break;
      default:
        break;
    }

    console.log(`The number ${number} in word form is: ${word}`);
  }

  rl.close();
});