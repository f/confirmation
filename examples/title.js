const confirmation = require('../src');

(async () => {
  if (await confirmation('Are you sure?', 'Are you sure to confirm what you do?')) {
    console.log('Yay!');
  } else {
    console.log('Oops!');
  }
})();
