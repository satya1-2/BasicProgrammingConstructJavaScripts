const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number (1, 10, 100, 1000, etc.): ', (input) => {
  const number = parseInt(input);

  let unit;

  switch (number) {
    case 1:
      unit = 'Unit';
      break;
    case 10:
      unit = 'Ten';
      break;
    case 100:
      unit = 'Hundred';
      break;
    case 1000:
      unit = 'Thousand';
      break;
    default:
      unit = 'Invalid number';
      break;
  }

  console.log(`The corresponding unit of ${number} is: ${unit}`);

  rl.close();
});