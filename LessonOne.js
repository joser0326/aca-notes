'strict mode';

var prompt = require('prompt');
prompt.start();

  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['username', 'email'], function (err, result) {
    // 
    // Log the results. 
    // 
    // console.log('Command-line input received:');
    // console.log('  username: ' + result.username);
    // console.log('  email: ' + result.email);

    //'hello <username>, your email is <email>'
    console.log('hello' + result.username + ',your email is ' + result.email);
  });