// 4) Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)
// 5) Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск, приклад: 10369 1 0 3 6 9

var conc = document.querySelector('#conc');
conc.onclick = function() {
    alert("concatenation")
    let conc1 = prompt("Please enter your Name:");
    let conc2 = prompt("Please enter your favorite color:");
    let conc3 = prompt("Please enter your age:");

    alert("Hello " + conc1 + ",  your age: " + conc3 + ", and your color: " + conc2);
}