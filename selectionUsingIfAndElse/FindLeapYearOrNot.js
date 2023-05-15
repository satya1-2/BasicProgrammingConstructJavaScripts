//Qno-3
function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const year = parseInt(process.argv[2]);

if (isNaN(year)) {
  console.log("Invalid input. Please provide a valid year.");
} else {
  const isLeap = isLeapYear(year);
  if (isLeap) {
    console.log(`${year} is a Leap Year.`);
  } else {
    console.log(`${year} is not a Leap Year.`);
  }
}