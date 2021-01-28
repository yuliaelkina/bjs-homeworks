String.prototype.isPalindrome = function() {
  let text =this.toLowerCase();
  text = text.split(' ').join('');
let mirrorText = text.split('').reverse().join('');
 return text == mirrorText;
};

function getAverageMark(marks) {
    let amount = 0;
  if (marks.length == 0) {
    return +0;
  }
  for (let i = 0; i < marks.length; i++) {
  amount += marks[i];
  };
  const average = amount/marks.length;
  const roundedAverage = Math.round(average);
  return roundedAverage; 
};

function checkBirthday(birthday) {
    const now = new Date().getTime();
    const birthdayDate = new Date(birthday).getTime();
    let diff = now - birthdayDate;
    const year = 31557600000;
    const age = diff/year;
      return age >= 18;
};
