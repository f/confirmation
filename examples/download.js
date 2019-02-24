const confirmation = require('../src');

const sleep = delay => new Promise(r => setTimeout(r, delay * 1000));

(async () => {
  process.stdout.write('Downloading internet...');
  await sleep(1);
  process.stdout.write('.');
  await sleep(0.2);
  process.stdout.write('.');
  await sleep(0.1);
  process.stdout.write('.');
  await sleep(0.1);
  process.stdout.write('.');
  await sleep(0.1);
  process.stdout.write('.');
  await sleep(0.1);
  process.stdout.write('.\n');
  await sleep(3);
  console.log('Downloaded to file internet.zip!');
  await sleep(2);
  process.stdout.write('.\n');
  if (await confirmation(
    'Extract internet.zip?',
    'The internet.zip file will be extracted to your computer, are you sure?',
    'Yes, I am',
    'Nope'
  )) {
    console.log('You\'ve extracted the internet.zip!');
  } else {
    console.log('Internet won\'t be extracted.');
  }
})();
