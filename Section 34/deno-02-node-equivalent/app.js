const fs = require('fs').promises;

const text = 'This is a test - and it should be stored in a file!';

fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote file!');
});
