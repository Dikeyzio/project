// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert( admin ) 

// let UserName = prompt('what is ur name?' , '');
// alert (`Your name is ${UserName} !`)


// let title = prompt ('Какое официальное название JavaScript?' , '' );
// if  (title=='ECMAScript') {
//     alert ('Правильно!')
// }
// else {
//     alert ('Не знаете? ECMAScript!')
// }

// let value = prompt('Введите число', '');

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// let result;

// let message = (a+b < 4) ?  'Мало' :
// (a + b > 4)? 'Mnogo';
// alert( message) - NEPRAVILNO

// result = (a + b < 4) ? 'Malo' : 'Mnogo'; pravilno

// let message = (login == 'Sotrudnik') ? 'privet' :
// (login == 'Director') ? ' Zdravstvuite' :
// (login == '') ? ' нет логина': '';

// if (age >= 14 && age <= 90) в диапозоне 

    
// if (age >= 14 && age <= 90);

// if ( age < 14 || age > 90);


// let UserName = prompt('Введите Логин', '');
// if (UserName == 'Admin'){
//     let pass = prompt('Введите пароль', '')
//     if (pass == 'Я главный'){
//         alert('Здравствуйте!')
//     } 
//     else if (pass == null) {
//         alert('Отмена')
//     }
//     else {
//         alert('Неверный пароль')
//     }

// }
// else if (UserName == null) {
//     alert ('Отменено')
// }  
// else {
// alert ('Я вас не знаю')
// }

// for (let i = 0; i < 10 ; i++) {
//     if (i % 2 == 0) continue; 
//         alert (i);
//         2
    
// }
 
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }

// let value;
// do {
//     value = prompt('Enter a number')
// }
// while (value < 100

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }
// if(browser == 'Edge') {
//     alert( "You've got the Edge!" );
// }
// else if ( browser== 'Chrome'
// ||browser == 'Firefox'
// ||browser == 'Safari'
// ||browser == 'Opera') {
//     alert ('Okay we support these browsers too');
// }
// else {
//     alert ('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0 :
//         alert ('Вы ввели число 0');
//         break;

//     case 1:
//         alert ('Вы ввели число 1')
//         break
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break;

// }

// function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum('сколько вам лет', 18);
//   alert( result ); // 3

// function checkAge(age) {

//  return (age > 18) ? true : confirm('родители разрешили?') ;
// }

// function checkAge(age) {
//  return (age > 18) || confirm('Родители разрешили?');

// }

// function min(a,b) {
//   if (a < b) {
//     return a;
//   }
//     else {
//       return b
//     }
  
// }

// function min(a,b) {
//   return  a < b ? a : b
 
// }

// alert ('Hello wirld!');
// document.write ('Hello world again');

// let name = 10  переменной нейм ПРИСВОИЛИ значение 10

// let a = 10;
// let b; 
// // неопределён
// let d;
// b= 'Some string';
// // теперь определёен как строчный

// e = 22;
// alert (e);

//  a = b;
// alert (a);

let a = 10;
let b = ' Some string';
let c = true;

document.write('hello');
document.write ('br/');
document.writeln (a);
document.writeln (b);
document.writeln (c);
document.writeln ('hr /');