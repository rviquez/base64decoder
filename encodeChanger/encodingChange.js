var fs = require('fs'),
path = require('path'),
iconv = require('iconv-lite');

function init(dir) {
  if (fs.existsSync(dir)) {
    fs.readdir(dir, function(err, files) {
      if (err) {
        console.log(err);
      }
      files.map(function(fileName) {
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        if (stats.isFile() && path.extname(fileName) === '.cs') {
          console.log(`Converting ${fileName}`);

        }else{

        }

      });
    });
    console.log('Converting files...');
  }
  else{
    console.log(`The following: ${dir} does not exist`);
  }
}

function convertFiles(err, files, dir) {

}

module.exports = {
  init: init
}
