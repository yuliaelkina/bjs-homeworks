console.clear();
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum + +arg;
  }, 0);
};

function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length) {
  return arr1.every((elem) => 
    elem === arr2[arr1.indexOf(elem)]);
} else {return false;};
};

function memorize(fn, limit) {
const memory = [];
////
////
  return fn(...args);
};
const mSum = memorize(sum, 5);

