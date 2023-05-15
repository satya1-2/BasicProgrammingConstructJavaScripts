const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number (1-7) representing the day of the week: ', (input) => {
  const day = parseInt(input);

  let weekday;

  switch (day) {
    case 1:
      weekday = 'Sunday';
      break;
    case 2:
      weekday = 'Monday';
      break;
    case 3:
      weekday = 'Tuesday';
      break;
    case 4:
      weekday = 'Wednesday';
      break;
    case 5:
      weekday = 'Thursday';
      break;
    case 6:
      weekday = 'Friday';
      break;
    case 7:
      weekday = 'Saturday';
      break;
    default:
      weekday = 'Invalid day';
      break;
  }

  console.log(`The day of the week corresponding to ${day} is: ${weekday}`);

  rl.close();
});

