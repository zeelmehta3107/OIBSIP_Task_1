var val1 = 0;
var val2 = 0;
var temp = 0;
var char = "";
var evelstr = "";

function dis(val) {
  if (typeof val == "number") {
    if (temp == 0) {
      if (val == 100) val1 = val1 * 100;
      else val1 = val1 * 10 + val;
      document.getElementById("display").innerHTML = val1;
    } else {
      if (val == 100) val2 = val2 * 100;
      else val2 = val2 * 10 + val;
      document.getElementById("display").innerHTML = val2;
    }
  } else {
    if (temp == 0) {
      temp = 1;
    } else {
      evelstr = val1 + char + val2;
      val1 = eval(evelstr);
      val2 = 0;
    }
    char = val;
    document.getElementById("display").innerHTML = val1;
  }
}

function solve() {
  evelstr = val1 + char + val2;
  document.getElementById("display").innerHTML = eval(evelstr);
  val1 = val2 = temp = 0;
  char = "";
}

function clr() {
  document.getElementById("display").innerHTML = "";
  val1 = 0;
  val2 = 0;
  temp = 0;
  char = "";
  evelstr = "";
}
