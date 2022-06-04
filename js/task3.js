// 3) Визначити середнє арифметичне трьох чисел

var avg = document.querySelector('#average');

avg.onclick = function() {
    alert("Average")
    let avg1 = +prompt("Please enter number one:");
    let avg2 = +prompt("Please enter number two:");
    let avg3 = +prompt("Please enter number three:");
    let average = (avg1 + avg2 + avg3) / 3;
    alert(average)
}
