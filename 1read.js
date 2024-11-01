// This file is not solution for exercise 1

const fs = require('node:fs');
try {
  fs.writeFileSync('./omg.txt', 'Oh my god 3 !', { flag: 'a' });
} catch (err) {
  console.error(err);
}
