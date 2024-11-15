const fs = require('node:fs');
try {
  const data = fs.readFileSync('./exercise1.js', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}