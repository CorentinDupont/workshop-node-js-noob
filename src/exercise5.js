exports.run = function(input) {
  console.log("Exercise #5");

  var fs = require('fs');

  input.showDone = (number) => console.log(`Project contains ${number} file(s) of tests`);

  input.showInProgress();
  fs.readdir(input.directory, function(err, data){
    if(err){
      input.showError();
    }
    input.showDone(data.length);
  });
};
