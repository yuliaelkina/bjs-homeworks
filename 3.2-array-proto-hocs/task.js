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
return (...args) => {
  if(memory.find(elem => compareArrays(elem.args, args))) {
    const findedOperation = memory.find(elem => compareArrays(elem.args, args));
    return findedOperation.result;
  } else {
  const result = fn(...args);
  memory.push({args: args, result: result});
  if (memory.length > limit) {
    memory.shift();
  };
  return result;}
}
};

const mSum = memorize(sum, 5);
console.log(mSum(3,4,5));
console.log(mSum(3,5,5));
console.log(mSum(3,6,7));
console.log(mSum(3,4,5));


