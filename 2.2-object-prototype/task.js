String.prototype.isPalindrome = function() {
  let text =this.toLowerCase();
  text = text.split(' ').join('');
let mirrorText = reverseString(text);
  if (text == mirrorText) {
      return true;
  }
  else {return false;
};
};

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
};


function getAverageMark(marks) {
    let amount = 0;
  if (marks.length == 0) {
    return +0;
  }
  for (let i = 0; i < marks.length; i++) {
  amount += marks[i];
  };
  let average = amount/marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage; 
};

function checkBirthday(birthday) {
    const now = new Date().getTime();
    const birthdayDate = new Date(birthday).getTime();
    let diff = now - birthdayDate;
    const year = 31557600000;
    let age = diff/year;
    if (age >= 18) {
        return true;
    }
    else { 
        return false;
    }
}

