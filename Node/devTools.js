var program = require('commander'),
    pwd = require('./passwordGenerator');


program
  .version('0.0.1')
  .option('-e, --encode [\'word\']', 'Word that needs to be encoded', '')
  .option('-d, --decode [\'word\']', 'Word that needs to be decoded', '')
  .option('--pwd [0]', 'Length of the password', 0)
  .option('--specialchars [false]', 'Password with special characters', false)
  .parse(process.argv);

  if (program.encode && program.encode !== '') {
    console.log(`Encoding: ${program.encode}`);
    console.log(new Buffer(program.encode).toString('base64'));
  }

  if (program.decode && program.decode !== '') {
    console.log(`Decoding: ${program.decode}`);
    console.log(new Buffer(program.decode, 'base64').toString('ascii'))
  }

  if (program.pwd > 0) {
    console.log(pwd.randomString(program.pwd, program.specialchars));
  }
