exports.run = function(input) {
  var multipliedNum = 1;
  input.forEach(obj => {
    if(obj.multiply){
      multipliedNum*=obj.value;
    }
  });
  return multipliedNum;
};
