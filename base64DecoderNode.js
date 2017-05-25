var program = require('commander');

program
  .version('0.0.1')
  .option('-e, --encode [\'word\']', 'Word that needs to be encoded', '')
  .option('-d, --decode [\'word\']', 'Word that needs to be decoded', '')
  .parse(process.argv);

  if (program.encode && program.encode !== '') {
    console.log(`Encoding: ${program.encode}`);
    console.log(new Buffer(program.encode).toString('base64'));
  }

  if (program.decode && program.decode !== '') {
    console.log(`Decoding: ${program.decode}`);
    console.log(new Buffer(program.decode, 'base64').toString('ascii'))
  }
