// 2) Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні

var comp = document.querySelector('#comparsion');

comp.onclick = function() {
    alert("comparison")
    let com1 = +prompt("Please enter number one:");
    let com2 = +prompt("Please enter number two:");
    alert(com1 == com2);
}