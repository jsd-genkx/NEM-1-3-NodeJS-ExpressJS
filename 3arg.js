// follow along

const argv = process.argv;
console.log(process.argv);

if (argv[2] === 'a' || argv[2] === 'aaa') {
  console.log("This is arg2 = ", argv[2]);
}

if (!isNaN(argv[3])) {
  console.log("This is arg3 = ", argv[3]);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
