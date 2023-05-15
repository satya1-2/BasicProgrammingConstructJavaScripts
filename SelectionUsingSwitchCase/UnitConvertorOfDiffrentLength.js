const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function feetToInch(feet) {
  return feet * 12;
}

function inchToFeet(inch) {
  return inch / 12;
}

function feetToMeter(feet) {
  return feet * 0.3048;
}

function meterToFeet(meter) {
  return meter / 0.3048;
}

rl.question('Enter the conversion type (1. Feet to Inch, 2. Inch to Feet, 3. Feet to Meter, 4. Meter to Feet): ', (conversionType) => {
  const type = parseInt(conversionType);

  if (isNaN(type) || type < 1 || type > 4) {
    console.log('Invalid conversion type. Please enter a valid conversion type.');
    rl.close();
    return;
  }

  rl.question('Enter the value to convert: ', (value) => {
    const inputValue = parseFloat(value);

    if (isNaN(inputValue)) {
      console.log('Invalid input value. Please enter a valid number.');
      rl.close();
      return;
    }

    let result;
    let unitFrom;
    let unitTo;

    switch (type) {
      case 1:
        result = feetToInch(inputValue);
        unitFrom = 'feet';
        unitTo = 'inches';
        break;
      case 2:
        result = inchToFeet(inputValue);
        unitFrom = 'inches';
        unitTo = 'feet';
        break;
      case 3:
        result = feetToMeter(inputValue);
        unitFrom = 'feet';
        unitTo = 'meters';
        break;
      case 4:
        result = meterToFeet(inputValue);
        unitFrom = 'meters';
        unitTo = 'feet';
        break;
    }

    console.log(`${inputValue} ${unitFrom} is equal to ${result} ${unitTo}.`);
    rl.close();
  });
});