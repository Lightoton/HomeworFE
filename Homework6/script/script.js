//1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
function getCalc(num1, num2) {
    if (num1%2==0 && num2%2==0) {
        return num1*num2;
    } else if (num1%2!=0 && num2%2!=0) {
        return num1+num2;
    } else if (num1%2==0 && num2%2!=0) {
        return num2;
    }else{
        return num1;
    }
};
// console.log(getCalc(4,5));

//2.Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function getDays(sec) {
    let days = sec/60/60/24;
    return days;
}
// console.log(getDays(172800));

//3.Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
// console.log(isPrime(prompt("Введите число.")));

//4.Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

function printMin(arg1, arg2) {
    if (arg1>arg2) {
        console.log(arg1);
    } else {
        console.log(arg2);
    }
};
// printMin(95,25);

//5.Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
function getArray(arg1, arg2) {
    let array = [];
    if (arg1>arg2) {
        let temp = arg1;
        arg1 = arg2;
        arg2 = temp;
    }
    for (let index = arg1; index <= arg2; index++) {
        array.push(index)
    }
    return array;
}
// console.log(getArray(58,45));