var program = require('commander'),
    change = require('./encodingChange');



program
  .version('0.0.1')
  .option('-d, --directory [\'word\']', 'directory of the files that need to have their encoding changed.', '')
  .parse(process.argv);

  if (program.directory) {
    console.log(`Checking directory: ${program.directory}`);
    change.init(program.directory);
  }
