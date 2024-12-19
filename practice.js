const task3Element = document.getElementById("alertBtn");

function fn1 () {
  alert ("Hi, this is JS!");
}

function fn2 (name) {
  alert ("Hi " + name);
}

fn1();
fn2("Harsha");

task3Element.addEventListener('click', fn1);

function brandNew (str1, str2, str3) {
  return(str1 + str2 + str3);
}
const totStr =  brandNew("C", "A", "R");
alert(totStr)