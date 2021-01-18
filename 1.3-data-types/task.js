"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
    };
    if (isNaN(contribution)) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    };
    if (isNaN(amount)) {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    };
    let creditAmount = amount-contribution;
    let term = ((date.getFullYear() - new Date().getFullYear())*12) + (date.getMonth() - new Date().getMonth());
    let percentage = (percent/100)/12;
    let monthlyPayment = creditAmount*(percentage+percentage/((Math.pow((1+percentage), term)-1)));
    let total = monthlyPayment*term;
    let totalAmount = +total.toFixed(2);
    // код для задачи №1 писать здесь
    console.log(totalAmount);
   return totalAmount;
}


function getGreeting(name) {
    let greetingName = name;
    if (!name) {
     greetingName = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${greetingName}.`
    // код для задачи №2 писать здесь
    return greeting;
}