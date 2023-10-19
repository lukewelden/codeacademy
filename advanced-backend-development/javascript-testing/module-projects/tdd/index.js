const Calculate = {
    factorial(num) {
      if (num === 0) {
        return 1;
      }
      
      for(let n = num -1; n >= 1; n--) {
        num *= n;
      } 
      return num;
    }  
  }
  
  
  module.exports = Calculate;
  
  
  