//QNo-1
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function findMinMax(values) {
    let min = values[0];
    let max = values[0];
  
    for (let i = 1; i < values.length; i++) {
      if (values[i] < min) {
        min = values[i];
      }
      if (values[i] > max) {
        max = values[i];
      }
    }
  
    return { min, max };
  }
  
  const values = [];
  for (let i = 0; i < 5; i++) {
    const value = generateRandomValue(100, 999);
    values.push(value);
  }
  
  const { min, max } = findMinMax(values);
  
  console.log("Generated values:", values);
  console.log("Minimum value:", min);
  console.log("Maximum value:", max);