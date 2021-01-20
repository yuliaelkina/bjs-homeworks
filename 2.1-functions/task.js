"use strict";
function getSolutions(a,b,c) {
let D = Math.pow(b,2)-(4*a*c);
if (D < 0) {
return { D: D, roots: []};
}
else if (D == 0) {
let x1 = ((-b + Math.sqrt(D))/(2*a));
return { D: D, roots: [x1]};
}
else if (D > 0) {
  let x1 = ((-b + Math.sqrt(D))/(2*a));
  let x2 = ((-b - Math.sqrt(D))/(2*a));
  return { D: D, roots: [x1, x2]};
  }
};

function showSolutionsMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
  alert(`Значение дискриминанта: ${result.D}`);
  if (result.roots.length == 0) {
    alert(`Уравнение не имеет вещественных корней.`);
  }
  else if (result.roots.length == 1) {
    alert(`Уравнение имеет один корень X\u2081 = ${result.roots[0]}`);
  }
  else if (result.roots.length == 2) {
    alert(`Уравнение имеет одва корня. X\u2081 = ${result.roots[0]} и X\u2082 = ${result.roots[1]}`);
  }
};

function getAverageScore(data) {
  let result = {};
  let total = 0;
  let disciplineQuantity = 0;
  let averageMark;
  for (let prop in data) {
    averageMark = getAverageMark(data[prop]);
    result[prop] = averageMark;
    total += averageMark;
    disciplineQuantity++;
    };
    if (total == 0) {
      result.average = 0;
      return result;
  };
  result.average = total/disciplineQuantity;
   console.log(result);
   return result;
};

function getAverageMark(marks) {
  let amount = 0;
  if (marks.length == 0) {
    return +0;
  }
  for (let i = 0; i < marks.length; i++) {
  amount += marks[i];
  };
  return +(amount/marks.length);
};


function getPersonData(secretData) {
  let personData = {};
  let code = [];
  let value;
  for (let prop in secretData) {
    value = secretData[prop];
    code.push(value);
  };
  personData["first name"] = getDecodedValue(code[0]);
  personData["last name"] = getDecodedValue(code[1]);
  return personData;
};

function getDecodedValue(secret) {
  if (secret == 0) {
    return 'Родриго';
  }
  else if (secret == 1) {
    return 'Эмильо';
  };
}
