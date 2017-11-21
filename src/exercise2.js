exports.run = function(input) {
  input = input.split('');
  var curMaxNumber = -1;
  input.forEach(number => {
    if(number > curMaxNumber){
      curMaxNumber = number;
    }
  });
  return Number(curMaxNumber);
};
