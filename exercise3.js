
const options = [
  {
    shortFrom: '-h',
    longFrom: '--help'
  },
  {
    shortFrom: '-n',
    longFrom: '--number'
  }
]

/*
--Task--

1. If you enter "node exercise3.js -h" and "node exercise3.js --help"
   must display "help me"

2. If you enter "node exercise3.js -n=xxx" and "node exercise3.js --number=xxx"
   must display "Your number is xxx"

3. If you enter 
   "node exercise3.js -l=100"
   "node exercise3.js --loop=100"
   "node exercise3.js loop 100"
   must display "1 2 3 ... 100"
*/

/*
--Tip--

const a = "--number=123456".split("=");
a[0] = "--number";
a[1] = "123456";
*/
