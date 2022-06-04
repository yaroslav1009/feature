var last = document.querySelector('#last');
last.onclick = function() {
    let n = prompt("Please enter number");
    let t = n.toString().split("").map((item) => item + ' ').join(" ")
    alert(t);
}