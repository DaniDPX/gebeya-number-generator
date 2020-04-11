function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
      min = 0;  max = 1;
    }
   return (Math.random() * (max-min)) + min;
  }
  

  //This line should be written at end of your project
  module.exports = randomNoGenerator;

  
  
