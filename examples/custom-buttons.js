const confirmation = require('../src');

(async () => {
  if (await await confirmation(
    'Warning',
    {
      message: 'You will delete your items, are you sure?',
      okText: 'I am sure',
      cancelText: 'No!'
    }
  )) {
    console.log('Yay!');
  } else {
    console.log('Oops!');
  }
})();
