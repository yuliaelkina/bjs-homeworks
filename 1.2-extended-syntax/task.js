    "use strict";
    function getResult(a,b,c){
    let x = [];
    let diskriminant = (b*b)-(4*a*c);
    if (diskriminant == 0) {
    x.push(-b/(2*a));
    }
    else if (diskriminant > 0) {
    x.push((-b + Math.sqrt(diskriminant))/(2*a));
    x.push((-b - Math.sqrt(diskriminant))/(2*a));
    };
    // код для задачи №1 писать здесь
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length === 0) {  
    console.log("Вы не ввели оценки!"); 
    return 0;
    };
    if (marks.length > 5) {
        marks = marks.slice(0, 5);
            console.log("Вы ввели более 5ти оценок!");
        };
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };
    return sum/marks.length; 
    // код для задачи №2 писать здесь
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age < 18) { 
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    else if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    };
    // код для задачи №3 писать здесь
}