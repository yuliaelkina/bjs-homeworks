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
  if(arr1.length === arr2.length && arr1.every((elem, ind) => elem === arr2[ind])) {
  return true;
} else {return false;};
};

function memorize(fn, limit) {
const memory = [];
return (...args) => {
  const findedOperation = memory.find(elem => compareArrays(elem.args, args));
  if(findedOperation) {
    return findedOperation.result;
  };
  const result = fn(...args);
  memory.push({args: args, result: result});
  if (memory.length > limit) {
    memory.shift();
  };
  return result;}
};

