const confirmation = require('../src');

(async () => {
  if (await await confirmation(
    'Warning',
    'You will delete your items, are you sure?',
    'I am sure',
    'No!'
  )) {
    console.log('Yay!');
  } else {
    console.log('Oops!');
  }
})();
