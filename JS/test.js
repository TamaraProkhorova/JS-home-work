//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question=prompt("Яка офіційна назва JavaScript?");

// console.log(prompt);

// if (question==="ECMAScript") {
//     alert("Вірно!");
// }
// else{
//     alert("Не знаєте? ECMAScript!");
// }

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// for (initialization; condition; post-expression) {
//     statements
//   }
// const max = 50;
// const min = 23;
// let sum=0;

// for (let i=max; i>=min; i-=1) {
//     console.log(i);
//     if (i%2===0){
// sum +=i;
//     }
// }
// console.log(sum);\

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

const question=prompt('login');
console.log(question)

if (question==="Адмін") {
    const password=prompt('Enter password');
    if (password==="Я головний") {
        console.log("Добрий день!");
    }else {
        console.log("Невірний пароль!");
    }
}else if (!question) {
    console.log("Скасовано");
}else {
    console.log("Я вас не знаю")
}
