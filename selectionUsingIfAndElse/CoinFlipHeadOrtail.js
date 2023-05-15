function coinFlip() {
    // Generate a random number between 0 and 1
    const random = Math.random();
  
    // If the random number is less than 0.5, consider it as "Heads"
    // Otherwise, consider it as "Tails"
    if (random < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  const result = coinFlip();
  console.log(result);