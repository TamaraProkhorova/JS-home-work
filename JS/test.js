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

// const question=prompt('login');
// console.log(question)

// if (question==="Адмін") {
//     const password=prompt('Enter password');
//     if (password==="Я головний") {
//         console.log("Добрий день!");
//     }else {
//         console.log("Невірний пароль!");
//     }
// }else if (!question) {
//     console.log("Скасовано");
// }else {
//     console.log("Я вас не знаю")
// }

// let message = "Vestibulum facilisis purus nec"
// let maxLength = 20
// let result
// if (message.length<=maxLength) {
//     result=message;
//   }else {
//     result=message.slice(0,maxLength)+"...";
//   }
// console.log(result)

// const order = [12, 85, 37, 4] 
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//     total += value;
//   }

//   // Change code above this line
//   console.log(total)

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     let smallerNumber = numbers[0];
//     for (const number of numbers) {
//         if (number<smallerNumber) {
//             smallerNumber = number;
//         }
//         return number
//     }
// }
// console.log(findSmallerNumber(numbers))

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// const caclculateAverage = (...numbers) => {
//     let sum = 0;
//     let count=0;
//     for (const number of numbers) {
      
//         // sum = sum + number
//         if (typeof number==='number') {
//             sum += number;
//             count += 1;
//         }

//     } 
//     return sum/count
// }
// console.log(caclculateAverage(1,2,3,'Hello'))
// caclculateAverage(2,1,4,5,'Hello')

//Напишіть код для пошуку пароля в масиві
//Через include і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

// function checkPassword (array, element) {

//     return array.includes(element) ? "Є пароль" : "Немає такого паролю";

// }
// console.log(checkPassword (passwords , password))

// function countProps(object) {
//     let propCount = 0;
//   const keys = Object.keys(object);
// for (const key of keys) {
//       propCount += 1;
//     }
//     return propCount;
//   }
// //     let propCount = 0;
// //     const keys = Object.keys(object);
// // for (const key of keys) {
// //     propCount += key;
// // }
//     // Change code below this line
// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //         propCount += 1;
// //     }
// //   }
//     // Change code above this line
    
 
  
//   const object = { mail: "poly@mail.com", isOnline: true, score: 500 };
//   console.log (countProps(object))

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
    
//     // Change code below this line
//   for (const key of Object.keys(salaries)) {
//       totalSalary += salaries[key];
//     }
//     // Change code above this line
//     return totalSalary;
//   }
//   const salaries = ({ kiwi: 200, poly: 50, ajax: 150 });
//   console.log(countTotalSalary(salaries))

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const color of colors) {
//      hexColors.push(color.hex);
//      rgbColors.push(color.rgb);
//    }
//    console.log(hexColors);
//    console.log(rgbColors);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//   for (const key of products) {
//     if (productName === key.name) {
//        return key.price;
//     }
    
//   return null
// }
//     // Change code above this line
  
// }
// const productName = "Engine";
// console.log(getProductPrice(productName))

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// // const twoScores = [...firstGroupScores, ...secondGroupScores];
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores)

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name){
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;     
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return
//       }
//     }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i=0; i<=this.potions.length; i+=1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return
//       }
//     }
//   },
//   // Change code above this line
// };

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // // Change code above this line
// };

// console.log(historyService.getOrdersLog())
// console.log(historyService.getEmails())
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"))

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }



// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice>=MAX_PRICE)
    this.#price = newPrice;
  
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000