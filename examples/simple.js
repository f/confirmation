const confirmation = require('..');

(async () => {
  if (await confirmation('Are you sure?')) {
    console.log('Yay!');
  } else {
    console.log('Oops!');
  }
})();
