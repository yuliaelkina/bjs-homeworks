function getResult(a,b,c){
    "use strict";
    let x = [];
    let x1;
    let x2;
    let diskr = (b*b)-(4*a*c);
    if (diskr == 0) {
    x1 = -b/(2*a);
    x.push(x1);
    }
    else if (diskr > 0) {
    x1 = (-b + Math.sqrt(diskr))/(2*a);
    x2 = (-b - Math.sqrt(diskr))/(2*a);
    x.push(x1);
    x.push(x2);
    };
    // код для задачи №1 писать здесь
    return x;
}

function getAverageMark(marks){
    let averageMark;
    let sum = 0;
    if (marks.length === 0) {
    averageMark = 0;
    console.log("Вы не ввели оценки!");
    }
    else {
        if (marks.length > 5) {
            marks = marks.slice(0, 5);
            console.log("Вы ввели более 5ти оценок!");
        };
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        };
        averageMark = sum/marks.length;
    };
    
    // код для задачи №2 писать здесь
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let date = new Date;
    let currentYear = date.getFullYear();
    dateOfBirthday = new Date(dateOfBirthday);
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let age = currentYear - yearOfBirthday;
    let result;
    if (age < 18) { 
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    }
    else if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
        console.log(result);
    };
    // код для задачи №3 писать здесь
    return result;
}